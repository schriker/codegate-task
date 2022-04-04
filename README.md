### Demo
[Online]()

### Folders structure
- `/src`
  - `index.tsx`: entry point file that renders the React component tree
  - `/app`
    - `store.ts`: store setup
    - `App.tsx`: root React component
  - `/common`: generic components
  - `/features`: contains all "feature folders"
    - `/messages`: 
      - `messagesSlice.ts`: redux reducer logic and associated actions
      - `Message*.tsx`: messages feature components
    - `/users`: 
      - `usersSlice.ts`: redux reducer logic and associated actions
      - `Users*.tsx`: users feature components
      - `usersData.ts`: users data mockup
  - `/hooks`: custom hooks
  - `/types`:  typescript types
---