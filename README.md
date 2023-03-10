# Custom Content Management System

Decided to create this fullstack application in order to have a platform where I can add and update content on future static web applications (Such as my portfolio) without having to dive back into the code. The project also serves to help me understand fullstack tecnology stacks and workflows better.

## What technologies am I using for this project?

The application was bootstrapped using the `create-t3-app` command and includes the following technologies

- [Next-Auth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [TailwindCSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## How it works
When the user first opens the application, they are prompted to sign in. The application uses NextAuth's 0Auth for authentication and the two primary providers are Google and Github. Once the user signs in, they are redirected back to the homepage. At the moment, there isn't much content to be displayed so there is just a single button to redirect the user to the Projects page

### Projects page
This is where the user creates the projects that will link to the application's api.
