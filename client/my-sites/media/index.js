/** @format */

/**
 * External dependencies
 */

import page from 'page';

/**
 * Internal dependencies
 */
import { navigation, siteSelection, sites } from 'my-sites/controller';
import mediaController from './controller';
import config from 'config';
import { makeLayout, render as clientRender } from 'controller';
import { getSiteFragment } from 'lib/route';

export default function() {
	if ( config.isEnabled( 'manage/media' ) ) {
		page( '/media', siteSelection, sites, makeLayout, clientRender );

		page(
			'/media/:filter(this-post|images|documents|videos|audio)?/:domain',
			siteSelection,
			navigation,
			mediaController.media,
			makeLayout,
			clientRender
		);

		page(
			'/media/:domain/:mediaId',
			siteSelection,
			navigation,
			mediaController.media,
			makeLayout,
			clientRender
		);

		page( '/media/*', ( { path } ) => {
			const siteFragment = getSiteFragment( path );

			if ( siteFragment ) {
				return page.redirect( `/media/${ siteFragment }` );
			}

			return page.redirect( '/media' );
		} );
	}
}
