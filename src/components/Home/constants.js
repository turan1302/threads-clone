import { COLORS } from '../../constants/theme';

export { COLORS };

export const getHomeSizes = width => ({
    logoSize: width * 0.08,
    avatarSize: width * 0.09,
    plusBadgeSize: width * 0.09 * 0.38,
    actionIconSize: width * 0.055,
    postImageHeight: width * 0.55,
});
