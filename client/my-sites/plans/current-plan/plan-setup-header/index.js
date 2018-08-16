/** @format */
/**
 * External dependencies
 */
import React, { PureComponent } from 'react';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import Card from 'components/card';
import JetpackSetupRunner from 'my-sites/plans/current-plan/jetpack-setup-runner/index';
import ProgressBar from 'components/progress-bar';

export class PlanSetupHeader extends PureComponent {
	static propTypes = {};

	state = {
		autoInstallStatus: {},
	};

	render() {
		const { translate } = this.props;
		return (
			<Card className="plan-setup-header">
				<JetpackSetupRunner />
				<img
					className="plan-setup-header__illustration"
					alt=""
					aria-hidden="true"
					src="/calypso/images/illustrations/fireworks.svg"
				/>
				<h1 className="plan-setup-header__title">
					{ translate( 'Thank you for your purchase!' ) }
				</h1>
				<p>
					{ translate(
						'Your website is on a %(planName)s plan for $(duration)s. Let’s walk through a short checklist of essential security features for safeguarding your website.',
						{
							args: {
								/**
								 * @TODO (sirreal) real props
								 */
								planName: 'Jetpack Premium',
								duration: '1 month',
							},
						}
					) }
				</p>
				<p>
					{ translate(
						'We’ve taken the liberty of starting the first two items, since they’re key to your site’s safety: we’re configuring spam filtering and backups for you now. Once that’s done, we can work through the rest of the checklist.'
					) }
				</p>
				<ProgressBar isPlusing total={ 100 } value={ 10 } />
				<div>
					<a href={ /* @TODO (sirreal) fix this */ document.location.pathname }>
						{ translate( 'Skip setup. I’ll do this later.' ) }
					</a>
				</div>
			</Card>
		);
	}
}

export default localize( PlanSetupHeader );
