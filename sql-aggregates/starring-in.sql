select "g"."name",
 count(*) as "genres"

from "films" as "f"
join "filmGenre" as "fg" using ("filmId")
join "genres" as "g" using ("genreId")
join "castMembers" as "c" using ("filmId")
join "actors" as "a" using ("actorId")
where "firstName" = 'Lisa' and "lastName" = 'Monroe'
group by "genreId"
