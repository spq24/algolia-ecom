

**Local Setup**
1. clone repo
2. npm install
3. npm start

## Production Site:
https://algolia-ecom.onrender.com/

## What I was hoping to accomplish:
I set out in this excercise hoping to learn a bit more about Algolia, the dashboard, the API's, the different libraries that were available, and how you could customize Algolia's search to make it fit any businesses' needs.

I wanted to do this in a realistic way where I could see myself actually implementing this as a developer on a project so I chose the ecommerce dataset and then used an React e-commerce template them to implement Algolia's search into.

**How I got started:**
1. I created an index using the dashboard
2. I wrote a quick script in ruby to grab the JSON data from the github repo and then used the save_objects method on the index the data.
3. I configured relevance settings and custom rankings metrics to furhter refine how the data will show up.
4. I then used the React InstantSearch UI Widgets to implement the Algolia search into the react template.

The documentation was great, the libraries were great, and I was amazed at how fast it was to index 10,000 objects, it took just a few seconds.

Overall, I felt it was a great exercise to get exposure to Algolia's system. If I had more time I would have loved to add Query Suggestions and Autocomplete. If this were a real world project I would love to get into the Analytics, A/B testing, and tweaking the custom rankings to further business goals.