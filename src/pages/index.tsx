import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import { useLiveQuery } from 'next-sanity/preview'

import Card from '~/components/Card'
import Container from '~/components/Container'
import Button from '~/components/studio/Button'
import Welcome from '~/components/Welcome'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { urlForImage } from '~/lib/sanity.image'
import {
  type Cta,
  ctasQuery,
  getCtas,
  getPosts,
  type Post,
  postsQuery,
} from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'

export const getStaticProps = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const posts = await getPosts(client)
  const ctas = await getCtas(client)

  // console.log(ctas)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      posts,
      ctas,
    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const [posts] = useLiveQuery<Post[]>(props.posts, postsQuery)
  const [ctas] = useLiveQuery<Cta[]>(props.ctas, ctasQuery)

  const landing = ctas?.find((cta) => cta.slug.current === 'landing')
  const landing1 = ctas?.filter((cta) => cta.slug.current === 'landing')

  console.log(ctas)

  return (
    <Container>
      <section>
        {/* {posts.length ? (
          posts.map((post) => <Card key={post._id} post={post} />)
        ) : (
          <Welcome />
        )} */}
        <div className="container">
          <div className="flex justify-center">
            <div className="flex-[0.8] space-y-4">
              <h1 className="text-[42px] leading-tight font-bold max-w-[65%]">
                {landing?.title}
              </h1>
              <p className="text-xl">{landing?.excerpt}</p>
              <div className="py-4">
                <Button href={landing?.buttonUrl}>{landing?.buttonText}</Button>
              </div>
            </div>
            <div className="">
              <Image
                src={urlForImage(landing?.mainImage)
                  .width(594)
                  .height(503)
                  .url()}
                height={503}
                width={594}
                alt="dfafef aefef"
              />
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}
