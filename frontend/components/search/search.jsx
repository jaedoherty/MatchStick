import React from "react";
import {Link} from 'react-router-dom'
import ProfileCard from './profile_card'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      connection: "",
      monogamy: "",
      gender_search: "",
      min_age_range: "",
      max_age_range: "",
    };
  }

  componentDidMount() {
    this.props.fetchProfiles();
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  reset() {

  }

  render() {
    if (Object.values(this.props.profiles).length === 0) {
      return null;
    } else {
      const range = (start, stop, step) =>
        Array.from(
          { length: (stop - start) / step + 1 },
          (_, i) => start + i * step
        );
      const age = range(18, 99, 1);
      let profiles = Object.values(this.props.profiles);

      return (
        <div id="search-container">
          <h1 id="search-header">Search</h1>
          <div id="search-bar">
            <div className="profile-dropdown-2" id="search">
              <h3>Connection: </h3>
              <select
                name="connections"
                className="dropdown"
                onChange={this.update("connection")}
              >
                <option className="drop-option" value="" selected>
                  Please Select
                </option>
                <option className="drop-option" value="Hookups">
                  Hookups
                </option>
                <option className="drop-option" value="New friends">
                  New friends
                </option>
                <option className="drop-option" value="Short-term dating">
                  Short-term dating
                </option>
                <option className="drop-option" value="Long-term dating">
                  Long-term dating
                </option>
              </select>
            </div>
            <div className="profile-dropdown-2" id="search">
              <h3>Relationship Type</h3>
              <select
                name="connections"
                className="dropdown"
                onChange={this.update("monogamy")}
              >
                <option className="drop-option" value="" selected>
                  Please Select
                </option>
                <option className="drop-option" value="Monogamous">
                  Monogamous
                </option>
                <option className="drop-option" value="Non-monogamous">
                  Non-monogamous
                </option>
                <option
                  className="drop-option"
                  value="Open to monogamy and non-monogamy"
                >
                  Open to monogamy and non-monogamy
                </option>
              </select>
            </div>

            <div className="profile-dropdown-2" id="search">
              <h3>Gender</h3>
              <select
                name="connections"
                className="dropdown"
                onChange={this.update("gender_search")}
              >
                <option className="drop-option" value="" selected>
                  Please Select
                </option>
                <option className="drop-option" value="man">
                  Man
                </option>
                <option className="drop-option" value="woman">
                  Woman
                </option>
                <option className="drop-option" value="nonbinary">
                  Nonbinary
                </option>
                <option className="drop-option" value="other">
                  Other
                </option>
              </select>
            </div>
            <div className="profile-dropdown-2" id="search">
              <h3>Min Age</h3>

              <select
                name="minAge"
                className="dropdown"
                id="age-dropdown"
                onChange={this.update("min_age_range")}
              >
                <option className="drop-option" id="minAge" value="" selected>
                  Please Select
                </option>
                {age.map((age) => (
                  <option className="dropdown">{age}</option>
                ))}
              </select>

            </div>
              <div className="profile-dropdown-2" id="search">
                <h3>Max Age</h3>

                <select
                  name="maxAge"
                  className="dropdown"
                  id="age-dropdown"
                  onChange={this.update("max_age_range")}
                >
                  <option className="drop-option" id="maxAge" value="" selected>
                    Please Select
                  </option>
                  {age.map((age) => (
                    <option className="dropdown">{age}</option>
                  ))}
                </select>
              </div>
              {/* <button id="reset">Reset Filters</button> */}
          </div>
          <div id="search-results">

              {Object.values(profiles).map((profile) => {
                if (
                  (profile.connection === this.state.connection ||
                    this.state.connection === "") &&
                  (profile.monogamy === this.state.monogamy ||
                    this.state.monogamy === "") &&
                  (profile.gender === this.state.gender_search ||
                    this.state.gender_search === "") &&
                  (profile.age >= this.state.min_age_range ||
                    this.state.min_age_range === "") &&
                  (profile.max_age_range <= this.state.max_age_range ||
                    this.state.max_age_range === "")
                ) {

                  return (
                    <ProfileCard profile={profile}/>
                  );
                }
              })}
          </div>
        </div>
      );
    }
  }
}

export default Search;
