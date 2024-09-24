<h1> SubEase </h1>

SubEase is a SaaS product designed to help users track and manage their subscriptions effortlessly. Whether it’s OTT platforms, productivity tools, or other recurring services, SubEase offers a simple dashboard to provide insights into your spending and helps you stay on top of your subscriptions.

##Features
- Subscription Management: Easily add, edit, and delete your subscriptions with key details like renewal date, cost, and billing cycle.
- Automatic Categorization: Group subscriptions into categories like entertainment, productivity, and more to get a clear view of where your money goes.
- Spending Insights: Understand how much you're spending on different categories and receive spending analytics.
- Authentication: Secure login and user management powered by Clerk.
- MongoDB Integration: Data storage and management built with MongoDB for efficient backend operations.

##Tech Stack
- Frontend: [Next.js](https://nextjs.org), [React](https://react.dev), [TypeScript](https://typescriptlang.org), [TailwindCSS](https://tailwindcss.com)
- UI Components: [ShadCn](https://ui.shadcn.com)
- Backend: [MongoDB](https://mongodb.com) (with future plans for extended backend features)
- Authentication: [Clerk](https://clerk.com)
- Hosting: [Vercel](https://vercel.com)
- Version Control: [Git](https://git-scm.com) & [Github](https://github.com)

##Installation
1. Clone the repository:
```bash
git clone https://github.com/ayushscripts/subease-main.git
cd subease-main
```
2. Install dependencies:
   ```bash
    npm install
    ```
3. Set up environment variables:
- Create a .env.local file and add your MongoDB and Clerk credentials.
   ```bash
    NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
    MONGO_DB_URI=<your-mongodb-uri>
    ```
4. Run the development server:
   ```bash
    npm run dev
    ```
   Visit [http://localhost:3000] to see your application in action.

##Contributing:
We welcome contributions from developers of all skill levels. If you have ideas, feature suggestions, or bug fixes, feel free to open an issue or submit a pull request.
1. Fork the repository
2. Create a feature branch: git checkout -b feature-name
3. Commit your changes: git commit -m 'Add new feature'
4. Push to the branch: git push origin feature-name
5. Open a Pull Request

##Roadmap
- Subscription Reports: Send periodic reports to users about their subscription spending.
- Auto-pay Tracking: Provide reminders for auto-pay subscriptions.
- Improved Analytics: Deep dive into users’ spending patterns with enhanced visualizations.

##License
This project is licensed under the MIT License. See the [LICENSE] file for details.

##Feedback
SubEase is free and open to feedback. If you have suggestions or features you'd like to see, [let us know](https://x.com/ayushfromindia)!
