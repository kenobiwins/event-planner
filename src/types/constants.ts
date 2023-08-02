enum Priority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

enum Categories {
  ART = 'art',
  MUSIC = 'music',
  BUSINESS = 'business',
  CONFERENCE = 'conference',
  WORKSHOP = 'workshop',
  PARTY = 'party',
  SPORT = 'sport',
}

enum SortBy {
  NAME = 'name',
  DATE = 'date',
  PRIORITY = 'priority',
}

enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

enum IconNames {
  ARROW_DOWN = 'arrow-down',
  ARROW_LEFT = 'arrow-left',
  ARROW_RIGHT = 'arrow-right',
  ARROW_UP = 'arrow-up',
  ARROW = 'arrow',
  CROSS = 'cross',
  FILTER = 'filter',
  PLUS = 'plus',
  SEARCH = 'search',
  SORT = 'sort',
}

enum IconPosition {
  LEFT = 'left',
  RIGHT = 'right',
}

export { Priority, Categories, IconNames, IconPosition, SortBy, SortOrder }
