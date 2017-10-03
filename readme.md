# Assessment 1 - Visualising temperature

For the first assessment that's part of the course "Front-end Development 3", I visualised [this](https://github.com/cmda-fe3/course-17-18/blob/master/assessment-1/temperature.csv) dataset.

## Background

"Front end Development 3" is a course that is part of the study programme "Communication and Multimedia Design". This course focuses on visualising data. The challenge in this assessment is to work with this huge amount of data.

## Process

### Picking the dataset

At the start of the assessment, we were able to choose from three different datasets. One in TSV, one in CSV and one in JSON.
I totally ignored the file type, and tried my best to see which data I could be most creative with.

One dataset was about the most spoken languages, the other one about access to indoor toilets.
I must admit that the 'languages' dataset was most appealing to me, since I love languages, but it frightened me. I had the most ideas for this one, but I knew they would be difficult to work out.
The 'toilets' dataset left me without any ideas. The only dataset remaining was the temperature dataset, that's what I went with.

### Deciding on visualisation

To explore visualisation possibilities, I went to the [d3 gallery](https://github.com/d3/d3/wiki/Gallery).

At first I wanted to go with the [Multi-Series Line Chart](https://bl.ocks.org/mbostock/3884955) in order to visualise the data in three different lines - daily, monthly and annually. Unfortunately, after many hours of pure frustration and inability I had to resort back to the normal [Line Chart](https://bl.ocks.org/mbostock/3884955). 

### Manipulating the Line Chart

My idea, to make the line chart at least a *little* bit different was to create a toggle button, to change the view from 1901 - 1939, 1940 - 1979 and 1980 - 2017. Once again, many hours of frustration and inability went into this. I've spent a lot of time looking into which features are needed to manipulate the data in this way and it simply did not work. I ended up simply having to improve the way it looks, instead of the way it works, very sadly.

This means that most changes to the line chart are visual. The changes I made are partially my personal preference, other visual changes are to give a better idea of which years were warmer and which were colder.

