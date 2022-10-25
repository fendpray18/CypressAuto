Feature: Login page

    Feature: Login page will work depending on the user credentials.

    Background:
        Given A user opens a travellin website
        Then  A user hold login button
    Scenario: Success Login
        When A user enters the username "fendy@gmail.com"
        And A user enters the password "123456Aa"
        And A user clicks on the login button
        Then the url will contains the profile subdirectory
    Scenario: Not Fill Login
        When A user enters the username "locked_out_user"
        And A user clicks on the login button
        #Then The error message "Invalid Username or Password." is displayed
        #And the url will contains the login Authenticate subdirectory
    Scenario: Incorrect Username Login
        When A user provides incorrect credentials
            | username | password     |
            | testName | secret_sauce |
        And A user clicks on the login button
        #Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed
    Scenario: Incorrect Password Login
        When A user provides incorrect credentials
            | username      | password     |
            | standard_user | testPassword |
        And A user clicks on the login button
        #Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed