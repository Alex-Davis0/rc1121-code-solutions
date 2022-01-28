select "firstName",
      "lastName"
      from "films"
      join "inventory" using ("filmId")
      join "customers" using ("storeId")
      where "title" = 'Magic Mallrats'
