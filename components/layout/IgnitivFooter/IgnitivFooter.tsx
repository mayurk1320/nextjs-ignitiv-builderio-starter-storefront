import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { Grid, Typography, Box, Link, IconButton } from '@mui/material'
import { useTranslation } from 'next-i18next'

import { KiboImage } from '@/components/common'
import Logo from '@/public/ignitiv-black.svg'

const IgnitivFooterItemLink = (props: any) => {
  return (
    <Typography variant="body2" sx={{ p: 2 }}>
      <Link href={props.link} underline="none" color="common.white">
        {props.text}
      </Link>
    </Typography>
  )
}
export default function IgnitivFooter(props: any) {
  const { sections = [], social = [] } = props
  const { t } = useTranslation('common')
  const mdColumnWidth = 12 / sections.length
  return (
    <>
      <Box
        component="div"
        sx={{
          px: { md: 10, sm: 5, xs: 5 },
          textAlign: { md: 'left', xs: 'center' },
          pt: 5,
          marginTop: 10,
          borderTop: '.05rem solid',
          borderColor: '#E2E2E2',
          backgroundColor: 'common.white',
        }}
      >
        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ color: '#7C7C7C' }}>
          <Grid item md={3}>
            <KiboImage src={Logo} height={40} alt="Ignitiv" />
            <Typography sx={{ marginTop: 2 }}>
              This is a headless ecommerce starter kit for KiboCommerce platform using Next.JS and
              BuilderIO
            </Typography>
            <Box sx={{ marginTop: 3 }}>
              <IconButton>
                <FacebookIcon fontSize="large" />
              </IconButton>
              <IconButton>
                <TwitterIcon fontSize="large" />
              </IconButton>
              <IconButton>
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton>
                <InstagramIcon fontSize="large" />
              </IconButton>
              <IconButton>
                <YouTubeIcon fontSize="large" />
              </IconButton>
            </Box>
          </Grid>
          <Grid item md={9}>
            <Grid container>
              <Grid item md={4} xs={12} sx={{ paddingLeft: { md: 16, xs: 0 }, color: '#2B2B2B' }}>
                <Typography
                  variant="h4"
                  sx={{ fontSize: 20, fontWeight: '600', marginTop: { xs: 2, sm: 0 } }}
                >
                  Shopping Online
                </Typography>
                <Box sx={{ marginTop: 2, color: '#494949' }}>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: { md: 18, sm: 16 }, fontWeight: '500', padding: 0.5 }}
                  >
                    Order Status
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: { md: 18, sm: 16 }, fontWeight: '500', padding: 0.5 }}
                  >
                    Shipping and Delivery
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: { md: 18, sm: 16 }, fontWeight: '500', padding: 0.5 }}
                  >
                    Returns
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: { md: 18, sm: 16 }, fontWeight: '500', padding: 0.5 }}
                  >
                    Payment Options
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={4} xs={12} sx={{ paddingLeft: { md: 16, xs: 0 }, color: '#2B2B2B' }}>
                <Typography
                  variant="h4"
                  sx={{ fontSize: 20, fontWeight: '600', marginTop: { xs: 2, sm: 0 } }}
                >
                  Information
                </Typography>
                <Box sx={{ marginTop: 2, color: '#494949' }}>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: { md: 18, sm: 16 }, fontWeight: '500', padding: 0.5 }}
                  >
                    Gift cards
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: { md: 18, sm: 16 }, fontWeight: '500', padding: 0.5 }}
                  >
                    Find a store
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: { md: 18, sm: 16 }, fontWeight: '500', padding: 0.5 }}
                  >
                    Newsletter
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: { md: 18, sm: 16 }, fontWeight: '500', padding: 0.5 }}
                  >
                    Become a member
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: { md: 18, sm: 16 }, fontWeight: '500', padding: 0.5 }}
                  >
                    Site feedback
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={4} xs={12} sx={{ paddingLeft: { md: 16, xs: 0 }, color: '#2B2B2B' }}>
                <Typography
                  variant="h4"
                  sx={{ fontSize: 20, fontWeight: '600', marginTop: { xs: 2, sm: 0 } }}
                >
                  Contact
                </Typography>
                <Box sx={{ marginTop: 2, color: '#494949' }}>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: { md: 18, sm: 16 }, fontWeight: '500', padding: 0.5 }}
                  >
                    store@ignitiv.com
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: { md: 18, sm: 16 }, fontWeight: '500', padding: 0.5 }}
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
          p: 3,
          marginTop: 10,
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
                fontSize: { md: 18, sm: 16, xs: 12 },
              }}
            >
              Designed By Ignitiv.co - &#169; 2021. All Rights Reserved.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
