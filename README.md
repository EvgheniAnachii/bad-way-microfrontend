### Bad way to implement micro frontend

From the first glance it my look appealing, however, 
using this approach I've found out two weaknesses (using such kind of container).

1. You cannot use lazy loading or having multiple bundles in your "micro frontend" apps
2. You cannot access third party css.

So, to sum up...the approach described in this article is flaky at some point.