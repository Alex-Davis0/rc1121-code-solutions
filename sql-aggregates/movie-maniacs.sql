select "c"."firstName",
 "c"."lastName",
sum("p"."amount") as "paid"
from "payments" as "p"
join "customers" as "c" using ("customerId")
group by "customerId"
order by "paid" desc
