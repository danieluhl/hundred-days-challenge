from datetime import timedelta, date
import sys

print date.today() + timedelta(days=int(sys.argv[1]))
