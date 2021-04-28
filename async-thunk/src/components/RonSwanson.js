import React, { useEffect } from "react"
import {connect} from "react-redux"
import {fetchSwanson} from '../actions/swansonActions'

const RonSwanson = (props) => {
  
    useEffect(() => {
        props.fetchSwanson()
    }, [props.fetchSwanson])

    if (props.loading) {
        return (
            <p> Consulting the council of Swansons </p>
        )
    }

    return (
    <div>
        <h1>{props.swansonism}</h1>
    <button onClick= {() => props.fetchSwanson()}> Dispense Essential Swanson Wisdom </button>
    </div>
        )
}

const mapStateToProps = (state) => {
    return {
        swansonism: state.swansonism,
        loading: state.loading,
    }  
}

const mapDispatchToProps = {fetchSwanson}

export default connect(mapStateToProps, mapDispatchToProps)(RonSwanson);