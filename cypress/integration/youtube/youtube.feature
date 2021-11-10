Feature: YouTube Main Page

  I want to open a search engine

  @youtube @regression
  Scenario Outline: Opening YouTube
    Given I open YouTube page
    Then I see "YouTube" in the title

    When I click 'I Agree' button
    Then I see YouTube Search Input

    When I search for the <title> band
    Then I see search result list

    Then The title of the 'first' result should contain '<title>'
    And The following elements should be visible:
      | input[id=search]    |
      | div[id=filter-menu] |

    Examples:
      | title       |
      | Iron Maiden |
      | Metallica   |
