import React from 'react'

function BuyMeACoffee() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center'
        }}>
            <a href="https://www.buymeacoffee.com/davidvelho" target="_blank">
                <img
                    // style="height: 60px !important;width: 217px !important;" 
                    style={{
                        height: '60px',
                        width: '217px'
                    }}
                    src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                    alt="Buy Me A Coffee"
                />

            </a>
        </div>
    )
}

export default BuyMeACoffee