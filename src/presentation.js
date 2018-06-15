/* eslint jsx-a11y/accessible-emoji: 0 */

// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  ListItem,
  List,
  Image,
  Slide,
  Text,
  Heading,
  CodePane,
  Notes,
  Link,
} from 'spectacle';

// Spectacle Theme & Layout components
import { theme, colors, size } from './theme';
import * as Layout from './layout';

// Prism plugins
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-graphql';

// Server & client code samples
import * as client from './code/client';
import * as server from './code/server';

// Preload images
import preloader from 'spectacle/lib/utils/preloader';
import images from './images';

preloader(images);

// Require CSS
require('normalize.css');

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        contentWidth={1500}
        contentHeight={800}
        controls={false}
        progress="none"
        theme={theme}
      >
        <Slide bgImage={images.moon}>
          <Text
            textSize="4em"
            textColor="primary"
            style={{
              alignSelf: 'center',
              fontWeight: 200,
              letterSpacing: '3px',
              lineHeight: 1.2,
              textAlign: 'center',
            }}
          >
            The future of<br />
            <span
              style={{
                fontWeight: 'bold',
                color: colors.tertiary,
                letterSpacing: '5px',
              }}
            >
              GraphQL servers 🚀
            </span>
          </Text>
        </Slide>
        <Slide bgImage={images.moon}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              alignSelf: 'center',
            }}
          >
            <Image
              src={images.peggy}
              height="400px"
              margin="0 60px 0 0"
              style={{ borderRadius: '50%' }}
            />
            <Layout.Column>
              <Text margin="20px 0px 0px 0px" bold textColor="tertiary">
                @peggyrayzis
              </Text>
              <Image
                src={images.apollo}
                width="550px"
                margin="10px 0 0 -40px"
              />
            </Layout.Column>
          </div>
        </Slide>
        <Slide>
          <Heading>The road to adoption 🛣</Heading>
          <Image src={images.frontend} style={{ maxHeight: '45%' }} />
          <Appear>
            <Image
              src={images.backend}
              style={{ alignSelf: 'flex-end', maxHeight: '45%' }}
            />
          </Appear>
        </Slide>
        <Slide>
          <Image src={images.airbnb} width="100%" />
          <Link
            style={{ alignSelf: 'flex-end' }}
            href="https://medium.com/airbnb-engineering/reconciling-graphql-and-thrift-at-airbnb-a97e8d290712"
          >
            <Text
              bold
              margin="30px 0"
              textSize={size.extraSmall}
              textColor="tertiary"
            >
              - @AdamRNeary, "Reconciling GraphQL and Thrift at Airbnb"
            </Text>
          </Link>
        </Slide>
        <Slide>
          <Notes>
            As frontend developers, the apps we build are increasingly data
            driven. We're building for mobile, wearables, VR, IOT - all separate
            clients requesting data from a multitude of different microservices.
            We have to meet our users where they are so we have to keep building
            for new platforms. Over time, this starts to get messy.
          </Notes>
          <Heading>Our apps are data driven</Heading>
          <Image src={images.dataDriven} width="100%" />
        </Slide>
        <Slide>
          <Notes>
            In fact, we recommend starting with the schema first. This is called
            schema driven development and it allows teams to develop
            independently while using the schema as a contract. One team can
            work on hooking up the schema's resolvers to the appropriate
            backends. While they're working on that, the frontend team can mock
            their schema which allows them to develop their UI without waiting
            on all of the data.
          </Notes>
          <Heading>GraphQL fosters collaboration</Heading>
          <Image src={images.sdd} width="100%" />
        </Slide>
        <Slide>
          <Notes>
            And that solution is GraphQL and Apollo. Instead of writing complex
            code for fetching and transforming the data into the shape you need,
            you just create a GraphQL query and bind it to your UI using
            Apollo's Query component. Apollo Client will take care of making the
            request, caching it, tracking loading and error state, as well as
            updating your UI.
          </Notes>
          <Heading>Apollo reduces complexity</Heading>
          <Image src={images.complexity} width="95%" />
        </Slide>
        <Slide>
          <Heading>Bridging the gap</Heading>
          <Appear>
            <Image src={images.frontend2} style={{ maxHeight: '45%' }} />
          </Appear>
          <Appear>
            <Image
              src={images.backend2}
              style={{ alignSelf: 'flex-end', maxHeight: '45%' }}
            />
          </Appear>
        </Slide>
        <Slide bgImage={images.moon}>
          <Heading
            textColor="primary"
            style={{
              alignSelf: 'center',
              fontWeight: 200,
              letterSpacing: '2px',
              lineHeight: 1.2,
            }}
          >
            We need a better server<br />experience in order to<br />
            <span
              style={{
                fontWeight: 'bold',
                color: colors.tertiary,
                letterSpacing: '3px',
              }}
            >
              accelerate adoption.
            </span>
          </Heading>
        </Slide>
        <Slide>
          <Notes>
            Up until now, I've used the term GraphQL server but sometimes I
            think the word server can be intimidating, especially for frontend
            developers. I think it's more accurate to call it a GraphQL layer
            since it sits on top of your existing data sources. Instead of
            defining a specific APIs for each relationship between a client and
            a service — which means writing and maintaining code — with graphql
            the services describe the data they have, apps describe the data
            they need, and there's a layer between them — that's apollo server —
            that manages how that data moves between the two.
            <br />
            <br />
            GraphQL APIs are at their best when they're built by the product
            teams that are using them, which is why we've lowered the barrier to
            entry with our latest release of Apollo Server.
          </Notes>
          <Heading>
            GraphQL{' '}
            <span style={{ textDecoration: 'line-through' }}>server</span> layer
          </Heading>
          <Image src={images.layer} width="100%" />
        </Slide>
        <Slide>
          <Notes>
            It turns out that layering GraphQL on top of REST can fix a lot of
            REST's shortcomings. That's the awesome thing about switching to
            GraphQL - it doesn't require an entire rewrite. You can migrate
            incrementally by building a GraphQL server over your existing REST
            endpoints and microservices. When backend developers don't have to
            worry about creating a new REST endpoint for every data combination,
            they can actually start to architect their REST APIs in a more
            thoughtful way.
          </Notes>
          <Heading>GraphQL over REST</Heading>
          <Layout.Row align="flex-start">
            <Layout.Column>
              <Image src={images.gqlOverRest} height="550px" />
            </Layout.Column>
            <Layout.Column>
              <List>
                {[
                  'Start with the APIs you already have & migrate incrementally',
                  'Fastest path to adoption for product developers',
                  'Existing caching strategies already in place',
                ].map(item => (
                  <ListItem key={item} textSize={size.small}>
                    {item}
                  </ListItem>
                ))}
              </List>
            </Layout.Column>
          </Layout.Row>
        </Slide>
        <Slide>
          <Notes>blah</Notes>
          <Heading>A simpler API</Heading>
          <Layout.Row align="center">
            <CodePane
              theme="light"
              source={server.yoga}
              lang="js"
              textSize="1.2em"
              style={{ minWidth: '50%' }}
            />
            <Image src={images.yoga} height="300px" />
          </Layout.Row>
        </Slide>
        <Slide bgImage={images.moon}>
          <Notes>
            The only thing left standing in our way is the GraphQL server. This
            is often the most intimidating part of implementing GraphQL, but
            we've been working hard to make building this GraphQL server
            approachable enough for a frontend developer to own the entire
            process from start to finish.
          </Notes>
          <Heading
            textColor="primary"
            style={{
              alignSelf: 'center',
              fontWeight: 200,
              letterSpacing: '2px',
              lineHeight: 1.2,
            }}
          >
            We want to make<br />
            developing a GraphQL layer<br />
            <span style={{ color: colors.tertiary, fontWeight: 'bold' }}>
              approachable
            </span>{' '}
            for everyone.
          </Heading>
        </Slide>
        <Slide bgImage={images.moon}>
          <div style={{ alignSelf: 'center' }}>
            <Heading>Apollo Server 2.0</Heading>
            <Heading
              size="4"
              textColor="primary"
              style={{
                alignSelf: 'center',
                fontWeight: 200,
                letterSpacing: '3px',
                lineHeight: 1.2,
              }}
            >
              New release candidate out today 🎉
            </Heading>
          </div>
        </Slide>
        <Slide>
          <Notes>
            Apollo Server 2.0! We've completely revamped the getting started
            experience with Apollo Server to make it as simple as possible. Just
            pass in your schema to the typeDefs property and your resolver
            functions that implement your schema. Apollo Server will take care
            of all the heavy lifting for you, such as setting up an Express
            server with subscriptions, file uploads, schema stitching, and all
            the best practices already wired up for you. With the new release,
            we've also created some new error primitives for common use cases
            such as AuthorizationErrors which propogate throughout the stack.
            We're shipping a release candidate on Friday so be sure to check it
            out.
          </Notes>
          <Heading>Apollo Server 2.0 🎉</Heading>
          <Layout.Row>
            <CodePane
              theme="light"
              source={server.apolloServer}
              lang="js"
              style={{ minWidth: '50%' }}
            />
            <List margin="0px">
              {[
                'Standard patterns based on best practices, all wired up',
                'Includes error management & a health check endpoint',
                'Supports subscriptions, schema stitching, & file uploads out of the box',
              ].map(item => (
                <ListItem textSize={size.small} key={item}>
                  {item}
                </ListItem>
              ))}
            </List>
          </Layout.Row>
        </Slide>
        <Slide>
          <Heading>Intuitive error handling 🚀</Heading>
          <CodePane theme="light" source={server.errors} lang="js" />
          <Link href="https://dev-blog.apollodata.com/full-stack-error-handling-with-graphql-apollo-5c12da407210">
            <Text textSize={size.small}>
              Check out the blog post by @clarencengohpy!
            </Text>
          </Link>
        </Slide>
        <Slide
          bgImage={images.annotatedPlayground}
          bgRepeat="no-repeat"
          bgSize="contain"
        />
        <Slide>
          <Image
            src={images.jani}
            height="80%"
            margin="0 0 30px 0"
            style={{ alignSelf: 'center' }}
          />
          <Link
            href="https://www.apollographql.com/docs/apollo-server/v2/"
            style={{ alignSelf: 'center' }}
          >
            <Text textSize={size.small} textColor="tertiary" bold>
              https://www.apollographql.com/docs/apollo-server/v2/
            </Text>
          </Link>
        </Slide>
        <Slide bgImage={images.moon}>
          <div style={{ alignSelf: 'center' }}>
            <Heading>Apollo Engine</Heading>
            <Heading
              size="4"
              textColor="primary"
              style={{
                alignSelf: 'center',
                fontWeight: 200,
                letterSpacing: '3px',
                lineHeight: 1.2,
              }}
            >
              The proxy is JavaScript & open source! 😍
            </Heading>
          </div>
        </Slide>
        <Slide>
          <Notes>
            I'm really excited about the future of GraphQL and Apollo and its
            potential to change how we think about data in our applications.
            Whether you're a frontend developer at a small startup or large
            enterprise, I think everyone can benefit from layering GraphQL over
            their existing data sources, especially if you're aggregating data
            from many places or transforming it on the frontend.
          </Notes>
          <Image src={images.platform} width="100%" />
        </Slide>
        <Slide>
          <Notes>blah</Notes>
          <Heading>Automatic persisted queries</Heading>
          <Layout.Row style={{ margin: '50px 0 0 0' }}>
            <Image src={images.persistedQueries} />
            <List margin="0px 0px 0px 50px">
              {[
                'On the client, add Apollo Link Persisted Queries to turn on persisted queries',
                'Hashed queries can be sent as GET requests, enabling CDN caching',
              ].map(item => (
                <ListItem textSize={size.small} key={item}>
                  {item}
                </ListItem>
              ))}
            </List>
          </Layout.Row>
        </Slide>
        <Slide bgImage={images.moon}>
          <Heading
            textColor="primary"
            style={{
              alignSelf: 'center',
              fontWeight: 200,
              letterSpacing: '2px',
              lineHeight: 1.2,
            }}
          >
            What's{' '}
            <span
              style={{
                fontWeight: 'bold',
                color: colors.tertiary,
                letterSpacing: '3px',
              }}
            >
              next?
            </span>
          </Heading>
        </Slide>
        <Slide bgImage={images.moon}>
          <Heading
            textColor="primary"
            style={{
              alignSelf: 'center',
              fontWeight: 200,
              letterSpacing: '2px',
              lineHeight: 1.2,
            }}
          >
            We want to enable all developers to create a<br />
            <span
              style={{
                fontWeight: 'bold',
                color: colors.tertiary,
                letterSpacing: '3px',
              }}
            >
              product-focused{' '}
            </span>
            API.
          </Heading>
        </Slide>
        <Slide>
          <Layout.Row align="center">
            <Image src={images.dataSource} width="40%" margin="0 40px 0 0" />
            <Layout.Column>
              <Heading style={{ textAlign: 'left' }} margin="0 0 50px 50px">
                Apollo Server Data Source
              </Heading>
              <List margin="0 0 0 50px">
                {[
                  'Easiest way to wrap a REST endpoint with GraphQL',
                  'Shared cache for whole and partial query caching',
                  'Existing cache-control hints are automatically tied to the fields in your schema',
                ].map(item => (
                  <ListItem textSize={size.small} key={item}>
                    {item}
                  </ListItem>
                ))}
              </List>
            </Layout.Column>
          </Layout.Row>
        </Slide>
        <Slide>
          <Notes>
            Another cool new feature in Apollo Server 2.0 that you can't get
            with any other language server is our new data source API, which
            simplifies layering a GraphQL API over your existing endpoints. It
            takes care of all the difficult parts for you, including resource
            caching that you used to have to do with DataLoader, already wired
            up for you. The data source interacts with a shared cache between
            each request which is what enables partial query caching.
          </Notes>
          <Heading>Apollo Server Data Source</Heading>
          <Layout.Row>
            <CodePane
              lang="js"
              theme="light"
              textSize=".8em"
              source={server.dataSource}
              style={{ minWidth: '50%' }}
            />
            <List margin="0 0 0 40px">
              {[
                'Includes data fetching primitives so you only have to supply an endpoint',
                'Allows developers to focus on business logic',
                'Coming soon: batching, deduplication, error handling, tracing 🙌',
              ].map((item, idx) => (
                <ListItem bold={idx === 3} textSize={size.small} key={item}>
                  {item}
                </ListItem>
              ))}
            </List>
          </Layout.Row>
        </Slide>
        <Slide>
          <Notes>
            I've used the term partial query caching before, let's see what this
            actually looks like. It's helpful for data that's a mix of static
            and dynamic, for example, we have mostly static movie data with a
            dynamic playback rate attached. Here's what this query looks like
            when you first run it. Notice all the resolver timings at the
            bottom.
          </Notes>
          <Image src={images.pq1} width="100%" height="100%" />
        </Slide>
        <Slide>
          <Notes>
            The second time you run it, all the static data is already cached
            and we only have to fetch the dynamic data, as you can see from the
            resolver tracing stats at the bottom. This is partial query caching
            at work thanks to the Apollo Server Data Source API.
          </Notes>
          <Image src={images.pq2} width="100%" height="100%" />
        </Slide>
        <Slide>
          <Notes>
            But what about when you need to make changes to your GraphQL API?
            How do we ensure that changes to our schema don't break our UI?
            That's where Apollo Engine's schema management tools come in. Just
            specify a list of validation rules for your schema and Apollo Engine
            will check each change you make against those rules. This allows you
            to refactor, add fields, deprecate fields, and clean up code with
            confidence that you haven't broken anything. Our schema validation
            integrates with GitHub so it's a natural part of your existing CI
            workflow.
          </Notes>
          <Layout.Row align="center">
            <Image
              src={images.schemaDiffing}
              width="40%"
              style={{ border: `1px solid ${colors.secondary}` }}
            />
            <Layout.Column>
              <Heading style={{ textAlign: 'left' }} margin="0 0 50px 50px">
                Apollo Engine schema diffing
              </Heading>
              <List margin="0 0 0 50px">
                {[
                  'Validates your schema against a set of rules to prevent breaking changes',
                  'Integrates with GitHub as a part of your CI workflow',
                ].map(item => (
                  <ListItem textSize={size.small} key={item}>
                    {item}
                  </ListItem>
                ))}
              </List>
            </Layout.Column>
          </Layout.Row>
        </Slide>
        <Slide>
          <Notes>
            How do you determine what to refactor in your schema? Apollo Engine
            provides field by field monitoring for your entire schema that
            allows you to see how often a field is used and how much time it
            takes to resolve. This can be useful for identifying areas to
            optimize your GraphQL API.
          </Notes>
          <Heading>Apollo Engine schema analysis</Heading>
          <Image src={images.engine} width="100%" />
        </Slide>
        <Slide>
          <Notes>
            Another reason to use Apollo Server for your GraphQL layer is that
            you'll be able to run it on the edge. This is something experimental
            that we've been working on which is super cool. It uses Cloudflare's
            new worker platform to run Apollo Server in a truly serverless
            environment. This allows you to cache whole query responses from
            within your CDN and partial responses on the edge, delivering data
            to your users faster. If you'd like to be on the list for early
            access, check out the link below
          </Notes>
          <Heading>GraphQL on the edge</Heading>
          <Layout.Row align="center">
            <Image src={images.cloudflare} width="32%" />
            <List margin="0 0 0 40px">
              {[
                `Run Apollo Server on the edge using Cloudflare's new worker platform`,
                'Cache whole query responses from within the CDN',
                'Completely serverless',
                'Early access: apollographql.com/edge',
              ].map((item, idx) => (
                <ListItem bold={idx === 3} textSize={size.small} key={item}>
                  {item}
                </ListItem>
              ))}
            </List>
          </Layout.Row>
        </Slide>
        <Slide>
          <Image src={images.future} width="100%" />
        </Slide>
        <Slide>
          <Image src={images.heart} width="100%" />
        </Slide>
        <Slide bgImage={images.moon}>
          <Heading textColor="primary" style={{ alignSelf: 'center' }}>
            @peggyrayzis
          </Heading>
          <Heading style={{ alignSelf: 'center' }}>@apollographql</Heading>
        </Slide>
      </Deck>
    );
  }
}
