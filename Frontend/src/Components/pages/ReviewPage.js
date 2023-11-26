import React from 'react'
import NavBar from '../organismos/NavBar'
import ReviewObject from '../organismos/ReviewObject'

export default function ReviewPage() {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div style={{ marginTop: '50px' }}>
                <ReviewObject />
            </div>
        </div>
    )
}
