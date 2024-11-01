import { SectionCard } from "../SectionCard/SectionCard"

export function SectionShowcase () {
    return (
        <section>
            <SectionCard title='The right beans' 
            text='Our journey begins with a deep-rooted connection to the land, as we seek out farmers who uphold environmentally-friendly practices and prioritize the well-being of their communities. Through personal relationships and mutual respect, we collaborate closely with these farmers, understanding their methods and values.' 
            img='beans.png' alt='beans'/>
            <SectionCard title='Carefully handled' 
            text='Each bean is carefully handpicked at the peak of ripeness, ensuring optimal flavor and aroma. We embrace diversity in our selection, cherishing the unique characteristics of each region and varietal. From the lush mountainsides to the sun-kissed valleys, we traverse the landscapes in search of perfection.' 
            img='coffee-bags.png' alt='coffee sacks'/>
            <SectionCard title='From us to you' 
            text='Our commitment to organic farming means that our beans are free from harmful chemicals, allowing the natural flavors to shine through. We believe in transparency and traceability, providing our customers with a genuine connection to the origins of their coffee.' 
            img='coffee-cup.png' alt='coffee cup'/>
        </section>
    ) 
}