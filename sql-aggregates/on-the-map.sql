select "c"."name" as "country",
      count(*) as "Number of cities"
  from "cities"
  join "countries" as "c" using ("countryId")
group by "countryId"
