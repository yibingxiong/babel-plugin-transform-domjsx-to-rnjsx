
function b() {
    console.log(1);
}

function A() {
    return (
        <div onClick={b} className="classNameValue">
            <ul>
                {
                    [1,2,3,4].map((item) => {
                        return (
                            <li>item</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}