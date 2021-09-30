//using sagas

import { MainScreen } from "../../components/MainScreen";
import { Table } from "react-bootstrap";

import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Restaurants extends React.Component {
  render() {
    // eslint-disable-next-line
    const { fetching, data, onRequestData, error } = this.props;

    return (
      <MainScreen title="Discover the best food joints in the city">
        <div>
          {data !== null ? (
            <div>
              <h3>Restaurants List</h3>
              <Table striped bordered hover>
                <thead id="checkDisplay">
                  <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Price For Two</th>
                    <th>Rating out of 5</th>
                    <th>Veg or Non-veg</th>
                  </tr>
                </thead>
                <tbody>
                  {(function () {
                    if (data === null) {
                      const discover = document.querySelector("#discover");
                      console.log(discover);
                      discover.classList.add("d-none");
                    }
                  })()}
                  {data.map((restaurant) => {
                    return (
                      <tr key={data.indexOf(restaurant)}>
                        <td>
                          <Link
                            className="link-item"
                            to={{
                              pathname: "/query",
                              state: {
                                resName: restaurant.name,
                                place: restaurant.location,
                                priceForTwo: restaurant.priceForTwo,
                                ratingOutOf5: restaurant.ratingOutOf5,
                                vegNonveg: restaurant.vegNonveg,
                              },
                            }}
                          >
                            {restaurant.name}
                          </Link>
                        </td>
                        <td>{restaurant.location}</td>
                        <td>{restaurant.priceForTwo}</td>
                        <td>{restaurant.ratingOutOf5}</td>
                        <td>{restaurant.vegNonveg}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          ) : (
            <div>
              <br />
              <button
                id="discover"
                className="btn btn-primary"
                onClick={onRequestData}
              >
                Discover Food Joints
              </button>
            </div>
          )}
          <br />
          {error && (
            <p style={{ color: "red" }}>Sorry - Something went wrong!</p>
          )}
        </div>
      </MainScreen>
    );
    }
}

const mapStateToProps = (state) => {
    return {
        fetching: state.fetching,
        data: state.data,
        error: state.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestData: () => dispatch({ type: 'API_CALL_REQUEST' })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
