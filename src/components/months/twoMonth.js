import React, { Component } from 'react'

export default class TeoMonth extends Component {
  render() {
    return (
      <div className="month-container">
        <h3>Two Month's Contract</h3>
        <div className="month-summary">
          <h4>
            2 month term with 4 payments.
          </h4>
          <p>
          Cronut migas plaid helvetica marfa. Fingerstache keytar literally activated charcoal. 
          Dreamcatcher fam bespoke la croix. Keffiyeh paleo intelligentsia, 
          letterpress kogi pabst la croix tote bag godard aesthetic copper mug.
          </p>
        </div>

        <form>
          <div>
          <input 
            type="text"
            name="name"
            placeholder="Name"
            // value={this.state.name}
            // onChange={this.handleChange}
          />

          <input
            type="text"
            name="url"
            placeholder="Last Name"
            // value={this.state.url}
            // onChange={this.handleChange}
          />
          </div>
        </form>
      </div>
    )
  }
}
