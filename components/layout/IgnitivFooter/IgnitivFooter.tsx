import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { Grid, Typography, Box, IconButton } from '@mui/material'
import { useTranslation } from 'next-i18next'

import { KiboImage } from '@/components/common'
import Logo from '@/public/ignitiv-black.svg'

export default function IgnitivFooter(props: any) {
  const { t } = useTranslation('common')

  const socialItems = [
    { icon: <FacebookIcon sx={{ fontSize: 30 }} />, key: 'facebook-icon' },
    { icon: <TwitterIcon sx={{ fontSize: 30 }} />, key: 'twitter-icon' },
    { icon: <LinkedInIcon sx={{ fontSize: 30 }} />, key: 'linkedin-icon' },
    { icon: <InstagramIcon sx={{ fontSize: 30 }} />, key: 'instagram-icon' },
    { icon: <YouTubeIcon sx={{ fontSize: 30 }} />, key: 'youtube-icon' },
  ]
  return (
    <>
      <Box
        component="div"
        sx={{
          px: { md: 10, sm: 5, xs: 5 },
          textAlign: { md: 'left', xs: 'center' },
          pt: 3,
          marginTop: 3,
          borderTop: '.05rem solid',
          borderColor: '#E2E2E2',
          backgroundColor: 'common.white',
        }}
      >
        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ color: '#7C7C7C' }}>
          <Grid item md={3}>
            <KiboImage src={Logo} height={35} alt="Ignitiv" />
            <Typography sx={{ marginTop: 2, fontSize: { xs: 13, sm: 16 } }}>
              This is a headless ecommerce starter kit for IgnitivCommerce platform using Next.JS
              and BuilderIO
            </Typography>
            <Box sx={{ marginTop: 3 }}>
              {socialItems.map(({ icon, key }: { icon: React.ReactNode; key: string }) => (
                <IconButton key={key}>{icon}</IconButton>
              ))}
            </Box>
          </Grid>
          <Grid item md={9}>
            <Grid container>
              <Grid
                item
                md={4}
                xs={12}
                sx={{ paddingLeft: { xs: 0, sm: 8, md: 8 }, color: '#2B2B2B' }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: 16, md: 18 },
                    fontWeight: '600',
                    marginTop: { xs: 2, sm: 0 },
                  }}
                >
                  Shopping Online
                </Typography>
                <Box sx={{ marginTop: 2, color: '#494949' }}>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: { md: 16, sm: 14, xs: 13 }, fontWeight: '500', padding: 0.5 }}
                  >
                    Order Status
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: { md: 16, sm: 14, xs: 13 }, fontWeight: '500', padding: 0.5 }}
                  >
                    Shipping and Delivery
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: { md: 16, sm: 14, xs: 13 }, fontWeight: '500', padding: 0.5 }}
                  >
                    Returns
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: { md: 16, sm: 14, xs: 13 }, fontWeight: '500', padding: 0.5 }}
                  >
                    Payment Options
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                md={4}
                xs={12}
                sx={{ paddingLeft: { xs: 0, sm: 8, md: 8 }, color: '#2B2B2B' }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: 16, md: 18 },
                    fontWeight: '600',
                    marginTop: { xs: 2, sm: 0 },
                  }}
                >
                  Information
                </Typography>
                <Box sx={{ marginTop: 2, color: '#494949' }}>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: { md: 16, sm: 14, xs: 13 }, fontWeight: '500', padding: 0.5 }}
                  >
                    Gift cards
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: { md: 16, sm: 14, xs: 13 }, fontWeight: '500', padding: 0.5 }}
                  >
                    Find a store
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: { md: 16, sm: 14, xs: 13 }, fontWeight: '500', padding: 0.5 }}
                  >
                    Newsletter
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: { md: 16, sm: 14, xs: 13 }, fontWeight: '500', padding: 0.5 }}
                  >
                    Become a member
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: { md: 16, sm: 14, xs: 13 }, fontWeight: '500', padding: 0.5 }}
                  >
                    Site feedback
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                md={4}
                xs={12}
                sx={{ paddingLeft: { xs: 0, sm: 8, md: 8 }, color: '#2B2B2B' }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: 16, md: 18 },
                    fontWeight: '600',
                    marginTop: { xs: 2, sm: 0 },
                  }}
                >
                  Contact
                </Typography>
                <Box sx={{ marginTop: 2, color: '#494949' }}>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: { md: 16, sm: 14, xs: 13 }, fontWeight: '500', padding: 0.5 }}
                  >
                    store@ignitiv.com
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: { md: 16, sm: 14, xs: 13 }, fontWeight: '500', padding: 0.5 }}
                  >
                    Hotline: +1131 138 138
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box
        component="div"
        sx={{
          p: 2,
          marginTop: 2,
          borderTop: '.05rem solid',
          borderColor: '#E2E2E2',
          backgroundColor: 'common.white',
        }}
      >
        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ color: '#7C7C7C' }}>
          <Grid item xs={12} alignContent="center" textAlign="center">
            <Typography
              variant="h4"
              sx={{
                textTransform: 'uppercase',
                fontWeight: '600',
                fontSize: { md: 16, sm: 14, xs: 12 },
              }}
            >
              Designed By Ignitiv.co - &#169; 2023. All Rights Reserved.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
