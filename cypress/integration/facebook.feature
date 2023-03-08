Feature: Facebook Registration and Login

#  Scenario: Registration
#    Given I am on the facebook home page
#    When I click on the create account button
#    Then I should see a registration page


  Scenario: Login with an invalid credentials
    Given I am on the facebook home page
    When I input my email address or phone number
    And I input my password
    And I click the submit button
    Then I should see a login failed page
