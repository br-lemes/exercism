module sieve
  implicit none

contains
  logical function isPrime(n)
    integer, intent(in) :: n
    integer :: j
    isPrime = .true.
    if (n < 2) then
      isPrime = .false.
      return
    end if

    do j = 2, n - 1
      if (mod(n, j) == 0) then
        isPrime = .false.
        return
      end if
    end do
  end function isPrime

  function primes(limit) result(r)
    integer, intent(in) :: limit
    integer, allocatable :: r(:)
    integer :: k, count, primeList(limit)

    count = 0
    do k = 2, limit
      if (isPrime(k)) then
        count = count + 1
        primeList(count) = k
      end if
    end do
    r = primeList(1:count)
  end function primes

end module sieve
