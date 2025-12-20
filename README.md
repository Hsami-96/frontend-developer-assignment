# Timescale Frontend Programming Assignment

Thank you for taking the time to apply for a frontend position at Timescale!
We hope you'll enjoy this small coding assignment that was designed to illustrate your coding skills. It should take around
3 hours to complete at a time of your choosing. If you have any questions, feel free to reach out to us and we'll be happy
to help. Happy hacking!

## Assignment

Implement a React component that allows managing email addresses. The component displays two lists: available recipients and selected recipients.

<img src="./src/assets/wireframe.png" height="50%" width="50%" />

Use the included `recipientsData.json` file to populate the lists within the component.

### Use cases

As a user, I can

- See the list of all available recipients. A recipient is either an email or a group of emails sharing the same company domain
- Select an individual recipient or a company domain. When a company domain is selected, all emails with the domain are added to the selected recipients' list
- Enter the name of a company into the autocomplete and select a recipient from the available suggestions
- Enter any email in the autocomplete. If the email passes validation it is possible to add it to the list of available recipients
- See the list of the selected recipients that are grouped into company and email recipients. The groups are expandable and show the contained members
- Remove the recipients from the selected list. It is possible to remove an individual email or all emails sharing a domain at once

### The rules

- The component should have a simple and clean design
- You can use a component library of your choice (we use Chakra UI)
- The component should work in the latest Chrome on Mac OS
- We don't expect a full test coverage, but a couple of unit tests would be nice to have
- Fork the repo to your own account, make it public and send us the repo url when you are completed. We will
  clone and run the site on our local.

## 🛠 Implementation

### 🎥 Demo


https://github.com/user-attachments/assets/f34df256-8731-4eef-b35f-97ca0aa96a70

---

### Approach

I approached this project by breaking the requirements down into the smallest possible steps and planning the order of implementation before writing any code. The goal was to start with the simplest tasks first and gradually build up complexity, initially without focusing on design.

---

### Structure & Data

I began by implementing a small utility function to load recipient data from a JSON file and map it into a strongly typed `Recipient` model. Early on, I followed a TDD style approach to validate the core logic, then eased off once the tests were no longer providing enough value for the time spent.

The app is structured around a single `Recipients` feature under `components`, with subcomponents handling specific responsibilities such as available recipients, selected recipients, domain grouping, and individual recipient rows. This keeps the feature self-contained and easy to reason about.

---

### State & Logic

State and business logic live inside a `useRecipients` hook. This hook is responsible for:

- consuming the initial data
- splitting recipients into available and selected
- grouping recipients by domain
- handling individual and domain-level selection
- filtering available recipients via search
- generating autocomplete suggestions and adding new emails

The hook also contains its own tests and related pure logic helpers.

---

### Feature Progression

Features were added incrementally in the following order:

- basic data rendering
- splitting recipients into available and selected
- grouping recipients by domain
- updating selection state from either side
- introducing styling using Tailwind CSS and Font Awesome
- adding search functionality
- adding autocomplete with support for adding valid new emails

I initially attempted to use Tailwind v4 but ran into tooling issues, so I stuck with Tailwind v3 to stay productive.

---

### Performance & Improvements

I used `useMemo` where appropriate to avoid unnecessary recalculations. For larger datasets, I would consider introducing React Context or a state management library, along with caching strategies if the data were fetched remotely.

---

### Final Thoughts

I really enjoyed working on this task and focused on keeping the implementation clean, incremental, and within the given time constraints! Feel free to give any feedback or suggestions.
