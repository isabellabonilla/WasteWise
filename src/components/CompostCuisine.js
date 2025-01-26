import React from 'react'

const CompostCuisine = () => {
return (
<>
          <h2>Compost Cuisine</h2>
          <p>
  WasteWise is a web application that caters a 5-star experience for your backyard decomposers using temperature and moisture sensors. Our application is catered toward the more hands-on-style of composting: hot composting.
</p>
            <br/>
            <h4 style={{ color: 'green' }}>"Greens"</h4>
            <p>
            These are organic material to give your compost a higher nitrogen-to-carbon ratio and some protein. This allows for higher reproduction rates for the decomposers. They are typically considered wet.
            </p>
            <h5>
                Some examples of greens:
            </h5>
            <ul>
                <li>Fresh grass clippings</li>
                <li>Food scraps such as vegetable and fruit scraps</li>
                <li>Coffee grounds</li>
                <li>Tea bags</li>
                <li>Not-yet seeding weeds</li>
                <li>Garden plant trimmings</li>
                <li>Farm animal manures</li>
            </ul>
            <br/>
            <h4 style={{ color: 'brown' }}>"Browns"</h4>
            <p>
                Unlike greens, these are carbon-rich, or carbohydrate-rich, ingredients that serve as the main food source for the organisms living in your compost bin. They are typically dry.
            </p>
            <h5>Some examples of browns:</h5>
            <ul>
                <li>Dead leaves</li>
                <li>Branches</li>
                <li>Twigs</li>
                <li>Paper</li>
                <li>Straw</li>
                <li>Dry corn stalks</li>
                <li>Sawdust</li>
                <li>Woodchips</li>
            </ul>

            <section className="workscited">
              <br/>
                <h5>Sources</h5>
                <ol>
                    <li><cite><a href="https://cwmi.css.cornell.edu/balancing.pdf">Composting: Balancing Your Greens and Browns</a></cite></li>
                    <li><cite><a href="https://www3.epa.gov/recyclecity/compost.htm">You Can Compost Too!</a></cite></li>
                    <li><cite><a href="https://www.epa.gov/sustainable-management-food/composting">Composting</a></cite></li>
                    <li><cite><a href="https://www.nrdc.org/stories/composting-101">Composting 101</a></cite></li>
                    <li><cite><a href="https://www.thespruce.com/composting-greens-and-browns-2539485">The Proper Compost Ratio of Greens and Browns</a></cite></li>
                    <li><cite><a href="https://www.thespruce.com/how-to-hot-compost-2539474">Hot Composting: How to Make Compost in Less Time</a></cite></li>
                </ol>
            </section>
            </>
)
}

export default CompostCuisine