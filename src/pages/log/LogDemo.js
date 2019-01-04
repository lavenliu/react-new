import React, {
    Component,
    Fragment,
} from 'react';

import {
    EuiFieldSearch,
    EuiSpacer,
    EuiButton,
    EuiButtonEmpty,
    EuiButtonIcon,
    EuiFlexGroup,
    EuiFlexItem
} from '@elastic/eui';

import '@elastic/eui/dist/eui_theme_k6_light.css'
  

export default class LogView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
        };
    }

    onChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        return (
            <div>
            <Fragment>
                <EuiFieldSearch
                placeholder="Placeholder text"
                value={this.state.value}
                onChange={this.onChange}
                aria-label="Use aria labels when no actual label is in use"
                />

                <EuiSpacer size="m" />

                <EuiFieldSearch
                placeholder="Disabled"
                value={this.state.value}
                onChange={this.onChange}
                disabled
                aria-label="Use aria labels when no actual label is in use"
                />

                <EuiSpacer size="m" />

                <EuiFieldSearch
                placeholder="Loading"
                value={this.state.value}
                onChange={this.onChange}
                isLoading
                aria-label="Use aria labels when no actual label is in use"
                />

                <EuiSpacer size="m" />

                <EuiFieldSearch
                placeholder="Loading and disabled"
                value={this.state.value}
                onChange={this.onChange}
                isLoading
                disabled
                aria-label="Use aria labels when no actual label is in use"
                />

                <EuiSpacer size="m" />

                <EuiFieldSearch
                placeholder="Read-only"
                value={this.state.value}
                onChange={this.onChange}
                readOnly
                aria-label="Use aria labels when no actual label is in use"
                />

                <EuiSpacer size="m" />

                <EuiFieldSearch
                placeholder="Compressed"
                value={this.state.value}
                onChange={this.onChange}
                compressed
                />
            </Fragment>
            
                <EuiFlexGroup gutterSize="s" alignItems="center">
                    <EuiFlexItem grow={false}>
                        <EuiButton
                        onClick={() => window.alert('Button clicked')}
                        >
                        Primary
                        </EuiButton>
                    </EuiFlexItem>
                </EuiFlexGroup>
                <Fragment>
    <EuiFlexGroup gutterSize="s" alignItems="center">
      <EuiFlexItem grow={false}>
        <EuiButton href="http://www.elastic.co" target="_blank">
          Link to elastic.co
        </EuiButton>
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <EuiButtonEmpty href="http://www.elastic.co">
          Link to elastic.co
        </EuiButtonEmpty>
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <EuiButtonIcon href="http://www.elastic.co" iconType="link" aria-label="This is a link" />
      </EuiFlexItem>
    </EuiFlexGroup>

    <EuiFlexGroup gutterSize="s" alignItems="center">
      <EuiFlexItem grow={false}>
        <EuiButton href="http://www.elastic.co" isDisabled>
          Disabled link
        </EuiButton>
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <EuiButtonEmpty href="http://www.elastic.co" isDisabled>
          Disabled empty link
        </EuiButtonEmpty>
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <EuiButtonIcon href="http://www.elastic.co" iconType="link" aria-label="This is a link" isDisabled />
      </EuiFlexItem>
    </EuiFlexGroup>
  </Fragment>
            </div>
        );
    }
}

