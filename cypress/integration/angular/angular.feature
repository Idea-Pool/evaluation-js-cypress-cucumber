Feature: Angular Main Page

  I want to open a Angular page

  Background:
    Given I open Angular page

  @angular @regression
  Scenario: 1. The title should be visible
    Then I see 'Angular' in the title

  Scenario: 2. The logos should be visible
    Then I see Angular logo in the navigation bar
    And I see Angular Logo in the hero section
