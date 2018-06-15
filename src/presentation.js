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
          <Notes>
            Lately, I've been traveling around the world to conferences and
            workshops and I hear common themes emerge. Often the people I meet
            are frontend developers. They're really excited about GraphQL and
            all the benefits they'd stand to gain but they're having trouble
            adopting it in their own organization. These frontend developers are
            also usually concerned about building a GraphQL server.
            <br />
            <br />
            On the other hand, the backend developers are usually not as
            excited. They're more skeptical and rightfully so since GraphQL's
            focus on the product represents a huge shift in their workflow.
            They're mostly concerned about performance, caching, and maintaining
            control over their services.
          </Notes>
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
          <Notes>
            This disagreement between frontend and backend engineers can stall
            progress on GraphQL adoption for months, or maybe even years as was
            the case at Airbnb. We need a way to find a compromise here.
          </Notes>
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
            The benefits of GraphQL are hard to deny. We're building for mobile,
            wearables, VR, IOT - all separate clients requesting data from a
            multitude of different microservices. We have to meet our users
            where they are so we have to keep building for new platforms and
            duplicating logic across clients. GraphQL prevents this situation
            from spiraling out of control.
          </Notes>
          <Heading>Our apps are data driven</Heading>
          <Image src={images.dataDriven} width="100%" />
        </Slide>
        <Slide>
          <Notes>
            GraphQL also fosters collaboration between frontend and backend
            teams. When the schema is a contract that both sides can adhere to,
            each side can work independently with a common goal in mind. The
            frontend doesn't even need to wait on backend changes to be
            productive - they can mock out the schema and keep developing Query
            components before the data fetching logic is finalized.
          </Notes>
          <Heading>GraphQL fosters collaboration</Heading>
          <Image src={images.sdd} width="100%" />
        </Slide>
        <Slide>
          <Notes>
            Perhaps one of the greatest benefits is how GraphQL clients can
            reduce the complexity managing state from within your application.
            Instead of writing complex code for fetching and transforming the
            data into the shape you need, you just create a GraphQL query.
            Apollo client will take care of making the request, caching it,
            tracking loading and error state, as well as updating your UI.
            Whether your favorite client is Apollo, Relay, or Urql, I think we
            all can agree that managing state with any GraphQL client is a hell
            of a lot better than rolling your own solution with REST and Redux.
          </Notes>
          <Heading>Apollo reduces complexity</Heading>
          <Image src={images.complexity} width="95%" />
        </Slide>
        <Slide>
          <Notes>
            So how do we bridge the gap between frontend and backend developers?
            To figure out a solution, we have to look at their motivations and
            find some common ground.
            <br />
            <br />
            Frontend devs want to have a say in what happens with their GraphQL
            API because they're the ones using it. Often, they're also the ones
            tasked with building an initial server implementation or POC, so
            they need an excellent out of the box server experience. They also
            are heavily concerned with identifying and following best practices
            for things like auth, testing, and schema design.
            <br />
            <br />
            On the other hand, backend developers want to ensure that their
            underlying services won't suffer performance hits as a result of
            introducing GraphQL. They're worried about things caching and
            monitoring.
          </Notes>
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
          <Notes>
            Their common ground here is the server. If we can design a better
            server experience, complete with advanced tooling to satisfy backend
            developers and a great getting started experience for the frontend
            developers, maybe we can speed up GraphQL adoption as a whole.
            <br />
            <br />
            At Apollo, this is exactly what was on our mind as we started to
            plan the next generation of Apollo Server.
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
            developers just getting started. I think it's more accurate to call
            it a GraphQL layer since it often sits on top of your existing data
            sources. We need to lower the barrier of entry to building this
            layer so its achievable by product teams, since GraphQL APIs are at
            their best when the product team using them has input into the
            design.
          </Notes>
          <Heading>
            GraphQL{' '}
            <span style={{ textDecoration: 'line-through' }}>server</span> layer
          </Heading>
          <Image src={images.layer} width="100%" />
        </Slide>
        <Slide>
          <Notes>
            Layering GraphQL on top of REST is many developers' first experience
            with GraphQL, so we wanted to make this experience better. One of
            the best parts of GraphQL is that it doesnt require an entire
            rewrite. You can migrate incrementally and rather quickly by
            building a GraphQL server over your existing REST endpoints. One
            common pain point is caching however. Teams don't want to have to
            totally reimplement their existing caching logic when switching to
            GraphQL.
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
                  'What about existing caching strategies already in place?',
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
          <Notes>
            Additionally, we needed a better out of the box experience. We were
            inspired by what Prisma did with graphql-yoga to connect the dots
            between APollo Server, graphql-tools and graphql-subscriptions to
            create an excellent getting started experience for GraphQL beginners
            and seasoned experts.
          </Notes>
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
            Ultimately, our goal for the next version of Apollo Server was to
            make developing this GraphQL layer approachable for everyone. We
            wanted to enable product developers to get GraphQL running quickly
            and give them the confidence they needed in order to actually ship
            their layer to production. With this goal in mind, we set out to
            totally revamp the Apollo Server experience. After a few weeks in
            beta and hearing all of your feedback, we're so excited to announce
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
          <Notes>
            that Apollo Server 2.0 is officially out of beta!! If you haven't
            tried it yet, I think you're really going to love it. Let's take a
            look at some of the new features
          </Notes>
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
            Instead of giving you separate tools that you'd have to fit together
            yourself, Apollo Server wires everything up for you already based on
            years of best practices. With only a couple lines of code, you can
            set up an GraphQL server in minutes. Out of the box, you get an
            Express server that includes our new error management features, as
            well as a health check endpoint, and advanced features like
            subscriptions and schema stitching already set up for you.
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
          <Notes>
            I want to talk a little about the new error handling primitives
            because they not only improve the developer experience working with
            GraphQL, they also get us to speak the same language about errors.
            Now you can throw an AuthorizationError for example in a resolver.
            This new error primitive uses the extensions.code property to
            produce a human readable status code, which you can check in an
            Apollo Link on the frontend to implement a reauth flow. For more
            information, check out the announcement post by one of our interns
            CLarence. I'll send out the links to the all the articles I
            reference on my Twitter after the talk.
          </Notes>
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
        >
          <Notes>
            With Apollo Server 2.0, you also get GraphQL Playground
            automatically set up for you. Shoutout to the Prisma team for their
            hard work on GraphQL Playground, it continues to be my favorite way
            to test queries and teach developers about GraphQL.
          </Notes>
        </Slide>
        <Slide bgImage={images.moon}>
          <Notes>
            Also included in Apollo Server 2.0 are some production-ready
            features guaranteed to please even the most skeptical backend
            engineers on your team! We really wanted performance to be a first
            class feature of Apollo Server 2.0, so we included response caching
            via the cache controld directive and reporting to Apollo Engine.
          </Notes>
          <div style={{ alignSelf: 'center' }}>
            <Heading>Production-ready features</Heading>
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
              Caching and reporting to Apollo Engine,<br /> now included in
              Apollo Server! 😍
            </Heading>
          </div>
        </Slide>
        <Slide>
          <Notes>
            Apollo Engine is our cloud service that provides deep insights into
            the performance of your GraphQL server. It has never been easier to
            set up Engine than it is now. Just provide an API key as an
            environment variable and Apollo Server will do all the heavy lifting
            for you. Some of the great features that used to require the engine
            proxy before are now enabled by default in Apollo Server. Another
            one of those features is
          </Notes>
          <Image src={images.platform} width="100%" />
        </Slide>
        <Slide>
          <Notes>
            Automatic persisted queries! All you have to do to complete the
            setup process is add the persisted queries link to your Apollo Link
            chain. This allows you to send a hash instead of the full query
            text, which improves network performance. It's also useful for
            sending queries as GET requests, which allows you to cache them with
            a CDN.
          </Notes>
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
        <Slide>
          <Notes>
            Don't worry if this sounds like a lot of information - We're also
            excited to announce a new docs site for Apollo Server 2.0 which will
            guide you through all the latest features! Jani, if you're tuning in
            on the live stream, this one's for you. All the new features are
            already documented and we're hoping to add more interactive examples
            on Glitch in the weeks leading up to the final release.
          </Notes>
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
          <Notes>
            Where do we go from here? The last part of this talk is going to
            cover how we see the future of GraphQL servers evolving over the
            next year and how Apollo Server 2.0 moves us in that direction.
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
          <Notes>
            Ultimately, our goal is to enable all developers, whether they're
            frontend or backend, to create a product focused API and ship it to
            production. What's next on the path toward that goal?
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
          <Notes>
            Wrapping a REST endpoint is often the fastest path to GraphQL
            adoption, but the best way to achieve that hasn't always been clear
            until now. I couldn't be more excited about the work Martijn has
            been doing on the new Apollo Server Data Source API. It's a new way
            to wrap REST endpoints that takes care of all the data fetching code
            for you so you just have to worry about writing business logic. It
            also comes with a shared cache in order to enable whole and partial
            query caching. One of the coolest features is that it picks up on
            existing cache hints from within your REST response's headers so you
            can reuse existing caching logic if you'd like. You also have the
            option of specifying cache hints on the schema using the
            cachecontrol directive.
          </Notes>
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
            Let's take a look at an example! Just extend from the REST data
            source class and you'll have access to data fetching primitives, as
            well as the context if you'd like to set headers from within the
            data source.
            <br />
            We're also planning on introducing features like error metrics and
            tracing grouped by data source, which will allow you to gain full
            visibility into what's happening with your data sources in Apollo
            Engine. The new data source API is available for you to play with in
            the new release candidate - definitely try it out and let us know
            what you think!
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
                'Coming soon: deduplication, error handling, per source tracing & metrics 🙌',
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
            I've used the term partial query caching a couple times, let's see
            what it actually looks like. It's helpful for data that's a mix of
            static and dynamic, for example, we have mostly static movie data
            with a dynamic playback rate attached. This query is calling a REST
            endpoint wrapped with the Apollo Server data source API. Here's what
            this query looks like when you first run it. Notice all the resolver
            tracing metrics at the bottom.
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
            Data Sources simplify server development at the bottom of the stack,
            but what can we do to simplify development at the schema level? How
            do we ensure that changes to our schema don't break our UI? That's
            where Apollo's new schema management tools come in. Just specify a
            list of validation rules for your schema and Apollo Server will
            check each change you make against those rules. This allows you to
            refactor, add fields, deprecate fields, and clean up code with
            confidence that you haven't broken anything.
          </Notes>
          <Layout.Row align="center">
            <Image
              src={images.schemaDiffing}
              width="40%"
              style={{ border: `1px solid ${colors.secondary}` }}
            />
            <Layout.Column>
              <Heading style={{ textAlign: 'left' }} margin="0 0 50px 50px">
                Collaboration across the stack
              </Heading>
              <List margin="0 0 0 50px">
                {[
                  'New tools to validate your schema and existing queries against a set of rules to prevent breaking changes',
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
            {' '}
            Our schema validation integrates with GitHub so it's a natural part
            of your existing CI workflow. We hope to create even more natural
            extension points in your editor and beyond to optimize collaboration
            between frontend and backend engineers.
          </Notes>
          <Image
            src={images.github}
            width="90%"
            style={{
              alignSelf: 'center',
              border: `1px solid ${colors.secondary}`,
            }}
          />
        </Slide>
        <Slide>
          <Notes>
            Not only will backend engineers love our new schema collaboration
            features, they can also take advantage of schema monitoring from
            within Apollo Engine in order to determine which queries need
            optimization. Apollo Engine provides field by field monitoring for
            your entire schema that allows you to see how often a field is used
            and how much time it takes to resolve.
          </Notes>
          <Heading>Apollo Engine schema analysis</Heading>
          <Image src={images.engine} width="100%" />
        </Slide>
        <Slide>
          <Notes>
            Many teams have told us they want better tools for managing their
            schemas, so we're excited to see where this is heading in the next
            couple months. We see a sample workflow looking like this. If a
            frontend developer wants to add a field based on the needs of their
            UI, they can submit a pull request which alerts a backend engineer.
            THe backend engineer can use our GitHub checks integration to ensure
            that any schema changes are non-breaking. Then, they can use the
            schema validation report combined with Apollo Engine schema metrics
            to offer feedback on the change. We think this end to end workflow
            will not only improve productivity but also collaboration between
            both sides.
          </Notes>
          <Heading>Schema collaboration</Heading>
          <Image src={images.collaboration} width="100%" />
        </Slide>
        <Slide>
          <Notes>
            Another reason to use Apollo Server for your GraphQL layer is that
            you'll be soon able to run it on the edge. This is something
            experimental that we've been working on which is super cool. It uses
            Cloudflare's new worker platform to run Apollo Server in a truly
            serverless environment. This allows you to use the Data Source API
            to cache whole query responses from within your CDN and partial
            responses on the edge, delivering data to your users faster. If
            you'd like to be on the list for early access, check out the link
            below. We'd love to hear your feedback!
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
          <Notes>
            All of our ideas about what the future of GraphQL servers could look
            like rollup to a greater goal, which is using GraphQL as a way to
            unify the data within our applications. Here's what we see that
            unification looking like.
            <br />
            <br />
            Over time, your graphql layer isn't going to be a single server.
            it'll be a group of services, each responsible for a portion of your
            graphql schema and query execution. All layers will run various
            builds and configurations of your Apollo server, all instrumented so
            you understand precisely what data each client has requested. You'll
            be able to know exactly where and how that request was serviced by a
            particular Data Source, with all that data integrated into every
            system that needs it. Ultimately, this architecture aims to give you
            a 360 degree view of how all your data is flowing through your
            system.
          </Notes>
          <Image src={images.future} width="100%" />
        </Slide>
        <Slide>
          <Notes>
            With better visibility into our GraphQL APIs through a comprehensive
            tooling story and reducing the steps it takes to build and deploy a
            GraphQL layer into production, I think we'll be able to make both
            frontend and backend teams happy in the end. Between Data Sources,
            schema management, and running GraphQL on the edge, we're super
            excited with this new direction and would love to hear your thoughts
            on what the next generation of GraphQL servers could look like.
          </Notes>
          <Image src={images.heart} width="100%" />
        </Slide>
        <Slide bgImage={images.moon}>
          <Notes>
            Finally, if you're looking for information to take back to your
            team, definitely check out our new learning resource at
            apollographql.com/docs. It features implementation guides for auth,
            testing, schema design, state management as well as getting started
            guides for Apollo Server 2.0 and Apollo Client.
          </Notes>
          <Heading
            textColor="primary"
            margin="0px"
            style={{ alignSelf: 'center', lineHeight: 1.2 }}
          >
            Get started!
          </Heading>
          <Heading style={{ alignSelf: 'center', lineHeight: 1.2 }}>
            apollographql.com/docs
          </Heading>
        </Slide>
        <Slide bgImage={images.moon}>
          <Notes>
            If you have any questions, feel free to come find me or any members
            of the Apollo team later today. Thank you!
          </Notes>
          <Heading textColor="primary" style={{ alignSelf: 'center' }}>
            @peggyrayzis
          </Heading>
          <Heading style={{ alignSelf: 'center' }}>@apollographql</Heading>
        </Slide>
      </Deck>
    );
  }
}
