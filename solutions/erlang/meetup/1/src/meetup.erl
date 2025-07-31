-module(meetup).

-export([meetup/4]).


meetup(Year, Month, DayOfWeek, Week) -> 
	LDayOfWeek=proplists:lookup_all(
					day_to_num(DayOfWeek),
						for(
							calendar:day_of_the_week(Year, Month,1),
							1,
							calendar:last_day_of_the_month(Year, Month),
							[]
						)
					),
	{Year, Month, get_day(LDayOfWeek,Week)}.

for(_WStart,DayStart,DayEnd,Acc) when DayStart>DayEnd->lists:reverse(Acc);
for(WStart,DayStart,DayEnd,Acc) when WStart>7->for(1,DayStart,DayEnd,Acc);
for(WStart,DayStart,DayEnd,Acc)->for(WStart+1,DayStart+1,DayEnd,[{WStart,DayStart}|Acc]).

get_day(L,first)->{_,Day}=lists:nth(1,L),Day;
get_day(L,second)->{_,Day}=lists:nth(2,L),Day;
get_day(L,third)->{_,Day}=lists:nth(3,L),Day;
get_day(L,fourth)->{_,Day}=lists:nth(4,L),Day;
get_day(L,last)->{_,Day}=lists:last(L),Day;
get_day(L,teenth)->{value,{_,Day}}=lists:search(fun({_,D}) when D >=13->true;(_)->false end, L),Day.

day_to_num(monday)->1;
day_to_num(tuesday)->2;
day_to_num(wednesday)->3;
day_to_num(thursday)->4;
day_to_num(friday)->5;
day_to_num(saturday)->6;
day_to_num(sunday)->7.