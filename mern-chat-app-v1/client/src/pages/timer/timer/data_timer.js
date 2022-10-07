const countries = {'America': ['Chicago', 'Denver', 'Detroit', 'Los_Angeles', 'New_York', 'Toronto', 'Vancouver'], 
    'Asia': ['Bangkok', 'Dubai', 'Ho_Chi_Minh', 'Hong_Kong', 'Jakarta', 'Macau', 'Qatar', 'Seoul', 'Shanghai', 'Singapore', 'Tokyo'], 
    'Australia': ['Melbourne', 'Perth', 'Sydney'], 'Europe': ['Berlin', 'Budapest', 'Copenhagen', 'Dublin', 'Helsinki', 'Istanbul', 
    'Lisbon', 'London', 'Monaco', 'Oslo', 'Moscow', 'Paris', 'Prague', 'Rome', 'Stockholm', 'Zurich']}

const a = async(cont) => {
        const americaZone = countries[cont]
        const requests = americaZone.map(c => fetch(`https://worldtimeapi.org/api/timezone/${cont}/${c}`))
        const promise = await Promise.all(requests)
        const america_time = await Promise.all(promise.map(pr => pr.json()))
        return america_time
    }
export default a
