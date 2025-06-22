Feature: Search functionality
  Scenario: Basic search on Bing
    Given I navigate to the search page
    When I search for "Playwright"
    Then I should see results containing "Playwright"