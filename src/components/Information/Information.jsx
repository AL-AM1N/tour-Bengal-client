import React from 'react'

function Information({singlePackageDetail}) {
    console.log(singlePackageDetail);
    return (
        <>
            <div className='text-justify'>
                {/* <p>
                    The Sundarbans—the largest continuous mangrove forest in the world—covers an area of <strong>5770 sq.km</strong> of land and water. It is a part of the world's largest delta, formed from sediments deposited by the great rivers <strong>Ganges</strong> and <strong>Brahmaputra</strong> that converge onto the Bengal basin. The western part of the forest lies in India, and the rest (~60%) is in Bangladesh. River channels and tidal creeks vary in width from just a few meters to five kilometers in some places. All parts of the Sundarbans forest are subject to tidal inundation during spring tides. The Bangladesh part of the forest is dominated by high mangrove cover. The climate is mainly tropical maritime with lots of rain, most of which falls during the monsoon. The monsoon season (May–October) is hot and humid, while winter (October–February) is mild and dry. In January, temperatures can fall as low as 4°C.
                </p>
                <br />
                <p>
                    The entire National Park area is covered by mangrove forest. There are small patches of brackish marshes on emerging islands and riverbanks, and sandy areas with grass and low shrubs on some of the outer islands. The two dominant mangrove species are <strong>Sundori</strong> and <strong>Gewa</strong>.
                </p>
                <br />
                <p>
                    Sundarbans is home to many species of birds, mammals, insects, reptiles, and fishes. Over 120 species of fish and more than 270 species of birds have been recorded. The Gangetic River Dolphin is common in the rivers, and at least 50 species of reptiles and eight species of amphibians occur. The Sundarbans also support the only population of the <strong>Estuarine (Saltwater) Crocodile</strong> in Bangladesh, with around 200 individuals.
                </p>
                <br />
                <p>
                    About 32 species of mammals are still found in this forest. Among these are <strong>Rhesus Macaques</strong>, <strong>Clawless Otters</strong>, <strong>Leopard Cats</strong>, <strong>Fishing Cats</strong>, and <strong>Spotted Deer</strong>. The Sundarbans also comprise the largest remaining habitat for the <strong>Royal Bengal Tiger</strong>.
                </p> */}
                {
                    singlePackageDetail.information.map(paragraph => (
                        <div key={singlePackageDetail._id}>
                            <p>{paragraph}</p>
                            <br></br>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default Information
