Feature: Navigation and verification on Blankfactor website

  Scenario: Verify navigation, text extraction, and contact page load
    Given I navigate to the Blankfactor homepage and accept the policies
    When I navigate to the "Retirement and Wealth" section from the industries menu
    And I scroll to the "Powering innovation in retirement services" section
    And I extract the text from the third innovation tile
    And I scroll to the bottom of the page and click the "Let's get started" button
    Then the contact page loads correctly
    And the title text of the contact page is printed to the console
