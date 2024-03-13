import { hexToRGBA } from '@lib/hex-to-rgba.js';

import type { OwnerStateThemeType } from '../types.js';

export const Timeline = () => {
  return {
    MuiTimeline: {
      styleOverrides: {
        root: {
          margin: 0,
          padding: 0
        }
      }
    },
    MuiTimelineItem: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          '&:last-of-type': {
            minHeight: 0
          },
          '&:not(:last-of-type) .MuiTimelineContent-root': {
            marginBottom: theme.spacing(4)
          }
        })
      }
    },

    MuiTimelineConnector: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          backgroundColor: theme.palette.divider
        })
      }
    },
    MuiTimelineContent: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          marginTop: theme.spacing(0.5)
        })
      }
    },
    MuiTimelineDot: {
      styleOverrides: {
        filledPrimary: ({ theme }: OwnerStateThemeType) => ({
          boxShadow: `0 0 0 3px ${hexToRGBA(theme.palette.primary.main, 0.16)}`
        }),
        filledSecondary: ({ theme }: OwnerStateThemeType) => ({
          boxShadow: `0 0 0 3px ${hexToRGBA(theme.palette.secondary.main, 0.16)}`
        }),

        filledError: ({ theme }: OwnerStateThemeType) => ({
          boxShadow: `0 0 0 3px ${hexToRGBA(theme.palette.error.main, 0.16)}`
        }),
        filledInfo: ({ theme }: OwnerStateThemeType) => ({
          boxShadow: `0 0 0 3px ${hexToRGBA(theme.palette.info.main, 0.16)}`
        }),
        filledSuccess: ({ theme }: OwnerStateThemeType) => ({
          boxShadow: `0 0 0 3px ${hexToRGBA(theme.palette.success.main, 0.16)}`
        }),
        filledWarning: ({ theme }: OwnerStateThemeType) => ({
          boxShadow: `0 0 0 3px ${hexToRGBA(theme.palette.warning.main, 0.16)}`
        }),

        filledGrey: ({ theme }: OwnerStateThemeType) => ({
          boxShadow: `0 0 0 3px ${hexToRGBA(theme.palette.grey[400], 0.16)}`
        }),

        outlinedPrimary: ({ theme }: OwnerStateThemeType) => ({
          '& svg': { color: theme.palette.primary.main }
        }),
        outlinedSecondary: ({ theme }: OwnerStateThemeType) => ({
          '& svg': { color: theme.palette.secondary.main }
        }),

        outlinedError: ({ theme }: OwnerStateThemeType) => ({
          '& svg': { color: theme.palette.error.main }
        }),
        outlinedInfo: ({ theme }: OwnerStateThemeType) => ({
          '& svg': { color: theme.palette.info.main }
        }),
        outlinedSuccess: ({ theme }: OwnerStateThemeType) => ({
          '& svg': { color: theme.palette.success.main }
        }),
        outlinedWarning: ({ theme }: OwnerStateThemeType) => ({
          '& svg': { color: theme.palette.warning.main }
        }),

        outlinedGrey: ({ theme }: OwnerStateThemeType) => ({
          '& svg': { color: theme.palette.grey[400] }
        })
      }
    }
  };
};
