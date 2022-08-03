

const data = [
    {
        no : 1,
        name: "Sugeng",
        address : "jl. sugeng",
        postcode: "11111",
        income: 50.000,
        status: "WaitingApprove",
        action: 
        <>
        <button class="btn px-4 py-0 me-2 fs-6 bg-opacity-50 text-white" style={{backgroundColor:"#FF0742"}}> Cancel </button>
        <button class="btn py-0 fs-6 text-white" style={{backgroundColor:"#0ACF83"}}> Approve </button>
        </>
    },
    {
        no : 2,
        name: "Susilo",
        address : "jl. susilo",
        postcode: "222222",
        income: 70.000,
        status: "Success",
        action: 
        <>
        <button class="btn rounded-circle text-white px-2 py-0" style={{backgroundColor:"#3BB54A", fontWeight:"800"}}> ✓ </button>
        </>

    },
    {
        no : 3,
        name: "Akbar",
        address : "jl. akbar",
        postcode: "333333",
        income: 85.000,
        status: "Cancel",
        action: 
        <>
        <button class="btn rounded-circle text-white px-2 py-0" style={{backgroundColor:"#E24C4B", fontWeight:"700", fontFamily:"Arial"}}> X </button>
        </>

    },
    {
        no : 4,
        name: "Tanjung",
        address : "jl. tanjung",
        postcode: "444444",
        income: 60.000,
        status: "OntheWay",
        action: 
        <>
        <button class="btn rounded-circle text-white px-2 py-0" style={{backgroundColor:"#3BB54A", fontWeight:"800"}}> ✓ </button>
        </>

    }
]

export default data