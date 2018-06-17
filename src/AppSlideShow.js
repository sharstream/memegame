export default class AppSlideShow extends React.Component {
  state = {
    images = [
      { id: 1, url= "https://www.google.com/search?newwindow=1&rlz=1C5CHFA_enUS728US728&biw=1641&bih=930&tbm=isch&sa=1&ei=E9smW5_0K4Ts5gK3iLLYCQ&q=comic+url+images+thor&oq=comic+url+images+thor&gs_l=img.3...54957.55572.0.56081.4.4.0.0.0.0.55.206.4.4.0....0...1c.1.64.img..0.0.0....0.niOTbQQVz_U#imgdii=gMkPjw1nGqmZiM:&imgrc=nkEe9RjOLDa1TM:" },
      { id: 1, url= "https://www.google.com/search?newwindow=1&rlz=1C5CHFA_enUS728US728&biw=1641&bih=930&tbm=isch&sa=1&ei=TNsmW76DNunm5gLywpz4BQ&q=comic+url+images+american+captian&oq=comic+url+images+american+captian&gs_l=img.3...27566.31079.0.31306.16.16.0.0.0.0.80.891.15.15.0....0...1c.1.64.img..1.1.72...35i39k1.0.42Ncrik31uk#imgdii=HlhwX24EvOC94M:&imgrc=8MTjRu1BpuBZIM:" },
      { id: 1, url= "https://www.google.com/search?q=comic+url+images+x-men&newwindow=1&rlz=1C5CHFA_enUS728US728&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiIu_PW2dvbAhWGrFkKHV2IAwEQ_AUICigB&biw=1641&bih=930#imgdii=XLSLHuCv4wrVDM:&imgrc=efYWCcsDrEgJtM:" },
      { id: 1, url= "https://www.google.com/search?q=comic+url+images+x-men&newwindow=1&rlz=1C5CHFA_enUS728US728&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiIu_PW2dvbAhWGrFkKHV2IAwEQ_AUICigB&biw=1641&bih=930#imgrc=efYWCcsDrEgJtM:" },
      { id: 1, url= "https://www.google.com/search?q=comic+url+images+x-men&newwindow=1&rlz=1C5CHFA_enUS728US728&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiIu_PW2dvbAhWGrFkKHV2IAwEQ_AUICigB&biw=1641&bih=930#imgdii=Hl9mCxIEqijBeM:&imgrc=sz0PVWZNZCa_AM:" },
      { id: 1, url= "https://www.google.com/search?q=comic+url+images+x-men&newwindow=1&rlz=1C5CHFA_enUS728US728&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiIu_PW2dvbAhWGrFkKHV2IAwEQ_AUICigB&biw=1641&bih=930#imgdii=oLVXxOzaPlsk8M:&imgrc=2JISseSWy5fkIM:" },
      { id: 1, url= "https://www.google.com/search?newwindow=1&rlz=1C5CHFA_enUS728US728&biw=1641&bih=930&tbm=isch&sa=1&ei=bdsmW-mLCYSC5wKw1KWYBQ&q=comic+url+images+spederman&oq=comic+url+images+spederman&gs_l=img.3...18157.22632.0.22837.18.15.3.0.0.0.79.800.14.14.0....0...1c.1.64.img..1.2.122...35i39k1.0.VYb9LaYTzQ8#imgdii=hUlsCtkkf6xOyM:&imgrc=_b9VVjzQDPiZwM:" },
      { id: 1, url= "https://www.google.com/search?newwindow=1&rlz=1C5CHFA_enUS728US728&biw=1641&bih=930&tbm=isch&sa=1&ei=j9smW_DGIIjb5gKnk7nYCA&q=comic+url+images+iron+man&oq=comic+url+images+iron+man&gs_l=img.3...58331.60825.0.61006.12.9.3.0.0.0.107.646.6j3.9.0....0...1c.1.64.img..0.0.0....0.LXo9ojFbuJg#imgdii=Z7ezPU4Gh48cAM:&imgrc=GCpKa8Xo9Uxj5M:" },
      { id: 1, url= "https://www.google.com/search?newwindow=1&rlz=1C5CHFA_enUS728US728&biw=1641&bih=930&tbm=isch&sa=1&ei=ztsmW_IIrfLmAtz5pdgN&q=comic+url+images+superman&oq=comic+url+images+superman&gs_l=img.3...22200.23213.0.23403.8.8.0.0.0.0.79.514.8.8.0....0...1c.1.64.img..0.1.69...35i39k1.0.FRWEjdwdTKw#imgdii=Jq0yOrOJEQO3HM:&imgrc=OMrUlwuwhHlilM:" },
      { id: 1, url= "https://www.google.com/search?newwindow=1&rlz=1C5CHFA_enUS728US728&biw=1641&bih=930&tbm=isch&sa=1&ei=5tsmW4L6HobZ5gLdkI4I&q=comic+url+images+black+panter&oq=comic+url+images+black+panter&gs_l=img.3...70901.72615.0.73024.12.12.0.0.0.0.65.668.12.12.0....0...1c.1.64.img..0.0.0....0.cJ9bB3FXdbk#imgdii=HoXBKZwilLHWPM:&imgrc=-CBK0em6PCtmYM:" },
      { id: 1, url= "https://www.google.com/search?newwindow=1&rlz=1C5CHFA_enUS728US728&biw=1641&bih=930&tbm=isch&sa=1&ei=MNwmW5CLJaGd5wLbjIOwCQ&q=comic+url+images+wonder+woman&oq=comic+url+images+wonder+woman&gs_l=img.3...96506.97987.0.98178.12.12.0.0.0.0.134.932.8j4.12.0....0...1c.1.64.img..0.0.0....0.mJq4jn2vNxU#imgrc=70DYAfnkK9bkcM:" },
      { id: 1, url= "https://www.google.com/search?newwindow=1&rlz=1C5CHFA_enUS728US728&biw=1641&bih=930&tbm=isch&sa=1&ei=49wmW661BcTI5gKI8bKoBQ&q=comics+4+fantastic&oq=comics+4+fantastic&gs_l=img.3..0i8i30k1l3.7197.12871.0.13037.18.18.0.0.0.0.135.1399.17j1.18.0....0...1c.1.64.img..0.18.1396...0j35i39k1j0i67k1j0i5i30k1.0.YzRmdgeh6n4#imgdii=BLoSzUGj3SeL8M:&imgrc=qtEsHDrrsK8NiM:" }
    ]
  }

  render() {
    return (
      <SlideShow slides= { this.state.images } />
    )
  }
}