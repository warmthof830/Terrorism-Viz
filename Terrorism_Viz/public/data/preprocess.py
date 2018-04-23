import csv
filename = "globalterrorismdb_0617dist.csv"
with open(filename, encoding="ISO-8859-1") as f:
    reader = csv.reader(f)
    data_list = list(reader)
    csvFile = open('short.csv', 'w', newline='')
    writer = csv.writer(csvFile)
    #fields = ['Price', 'Features', 'Safety', 'Security', 'Privacy', 'Reliability', 'User Review', 'Expert REC', 'Friend/Family REC', 'Convenience']
    fields = ['year','lat','lng']
    writer.writerow([*fields])
    for row in data_list[1:]:
        #if int(row[1])>2015:
            writer.writerow([row[1], row[13], row[14]])

    csvFile.close()