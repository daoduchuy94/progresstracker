Upload to github:

```bash
git add .
git commit -m "[some commit message]"
git push -u origin main
```

State 1:
database :{}
State 2:
Command: create an index called "users"
-> database: {users: []}
State 3:
Command: create another index called "something_else, copy all data from users to "something_else", delete "users"
-> database: {something_else:[all data from users here]}

database.index({index:"users"}) -> add data to an index called "users"
database.index({index:"fuck_shit"}) -> add data to an index called "fuck_shit"
