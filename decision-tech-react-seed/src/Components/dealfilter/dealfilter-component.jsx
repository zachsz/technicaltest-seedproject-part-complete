import React from 'react';
import './dealfilter.scss';
class SpeedFilter extends React.Component {
    render() {
        if (this.props.filterState.productTypes.broadband) {
            return (<div>
                <div>Speed</div>
                <select value={this.props.filterState.speed} onChange={this.props.filterChanged}>
                    <option value="">Any</option>
                    <option value="17408">17MB</option>
                    <option value="53248">52MB</option>
                    <option value="77824">76MB</option>
                </select></div>)
        } else return (null)
    }
}

class MobileFilter extends React.Component {
    render() {
        if (this.props.filterState.productTypes.mobile)
            return (
                <div>
                    <div>Mobile Data</div>
                    <select value={this.props.filterState.mobileData} onChange={thihs.props.filterChanged}>
                        <option value="">Any</option>
                        <option value="2">2GB</option>
                        <option value="5">5GB</option>
                    </select>
                </div>
            )
        else return (null)
    }
}


export class DealFilter extends React.Component {
    render() {
        return (<div className={`deal-filter-menu`}>
            <ul>
                <li><input type="checkbox" disabled checked={this.props.filterState.productTypes.broadband} onChange={this.props.filterChanged} /> Broadband</li>
                <li><input type="checkbox" checked={this.props.filterState.productTypes.tv} onChange={this.props.filterChanged} /> TV</li>
                <li><input type="checkbox" checked={this.props.filterState.productTypes.mobile} onChange={this.props.filterChanged} /> Mo</li>
            </ul>
            <SpeedFilter filterState={this.props.filterState} filterChanged={this.props.filterChanged} />
            <MobileFilter filterState={this.props.filterState} filterChanged={this.props.filterChanged} />
        </div>);
    }
}