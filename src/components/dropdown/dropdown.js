import React, { Component } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import './dropdown.css';

export default class DropdownAction extends Component {
    
    render() {
        const { onFilterChange } = this.props;
        
        return (
            <Dropdown className="drop">
                <Dropdown.Toggle id="dropdown-basic">
                    Выбор клуба
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item
                        onClick = {() => onFilterChange('All')}
                    >
                        Все клубы
                    </Dropdown.Item>
                    <Dropdown.Item cd
                        onClick = {() => onFilterChange('Kometa в ТРЦ Columbus')}>
                        Комета в ТРЦ Columbus
                    </Dropdown.Item>
                    <Dropdown.Item 
                        onClick = {() => onFilterChange('Kometa в ТРК Mari')}>
                        Комета в ТРЦ Mari
                    </Dropdown.Item>
                    <Dropdown.Item 
                        onClick = {() => onFilterChange('Kometa Black')}>
                        Комета Black
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}