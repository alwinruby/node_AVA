# node.js AVA Testing

AVA is a node.js test runner

Started in November 2014

### Set up

    npm install ava -g

    Or

    npm install --save-dev ava

    

To run the command _ava_ is all that is needed.

#### Reasons to use ava

1. Minimal and fast
2. Simple test syntax
3. Runs tests concurrently
4. Enforces writing atomic tests
5. No implicit globals
6. Isolated environment for each
7. Write tests in ES2015
8. Promise Support
9. Generator function Support
10. Async function support
11. Observable Support
12. Enhanced Asserts
13. Optional TAP output
14. Clean stack traces


#### Three inputs to testing React components

    Props
    User
    Data


#### AVA only has 8 test assertions


    *Assertion        Negative Assertion*
    pass()            fail()
    truthy()          falsy()
    true()            false()
    is()              not()
    deepEqual()       notDeepEqual()
    throws()          notThrows()
    regex()           notRegex()
    snapshot()
