<template>
  <div class="container">
    <h3> Networking </h3>
    <ul class="list-group-mine list-group">
      <li class="list-group-item">
        <a style="color: #42b983;" href="https://www.tenable.com/products/nessus-home"> Nessus - Graphical Port Scanner </a>
      </li>
      <li class="list-group-item">
        <a style="color: #42b983;" href="https://nmap.org/"> NMap - Open Source Command Line Port Scanner </a>
      </li>
      <li class="list-group-item">
        <a style="color: #42b983;" href="https://www.wireshark.org/"> Wireshark - Graphical Packet Sniffer </a>
      </li>
      <li class="list-group-item">
        <a style="color: #42b983;" href="https://github.com/simsong/tcpflow"> TcpFlow - Extracts files from packet captures </a>
      </li>
    </ul>
    <h3> Steganography </h3>
    <ul class="list-group-mine list-group">
      <li class="list-group-item">
        <a style="color: #42b983;" href="https://mh-nexus.de/en/hxd/"> HxD - Hex Editor (Windows) </a>
      </li>
      <li class="list-group-item">
        <a style="color: #42b983;" href="https://ridiculousfish.com/hexfiend/"> HexFiend - Hex Editor (macOS) </a>
      </li>
      <li class="list-group-item">
        <a style="color: #42b983;" href="https://wiki.gnome.org/Apps/Ghex"> GHex - Hex Editor (Linux) </a>
      </li>
      <li class="list-group-item">
        <a style="color: #42b983;" href="https://www.sno.phy.queensu.ca/~phil/exiftool/"> ExifTool - Reads/edits metadata for various filetypes </a>
      </li>
      <li class="list-group-item">
        <a style="color: #42b983;" href="https://github.com/sleuthkit/scalpel"> Scalpel - File Carving Tool </a>
      </li>
      <li class="list-group-item">
        <a style="color: #42b983;" href="https://github.com/ReFirmLabs/binwalk"> BinWalk - Carves Files From Firmware </a>
      </li>
      <li class="list-group-item">
        <a style="color: #42b983;" href="https://github.com/sleuthkit/sleuthkit"> Sleuthkit - Pulls files from disk images </a>
      </li>
    </ul>
    <h3> Web Hacking </h3>
    <ul class="list-group-mine list-group">
      <li class="list-group-item">
        <a style="color: #42b983;" href="https://portswigger.net/burp/communitydownload"> BurpSuite - HTTP request mucking tool </a>
      </li>
      <li class="list-group-item">
        <a style="color: #42b983;" href="https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg?hl=en">
          EditThisCookie - Cookie editor (Chrome) 
        </a>
      </li>
      <li class="list-group-item">
        <a style="color: #42b983;" href="https://addons.mozilla.org/en-US/firefox/addon/cookies-manager-plus/">
          Cookies Manager+ - Cookie editor (Firefox) 
        </a>
      </li>
    </ul>
    <h3> Crypto/Cracking </h3>
    <ul class="list-group-mine list-group">
      <li class="list-group-item">
        <a style="color: #42b983;" href="https://github.com/magnumripper/JohnTheRipper"> John The Ripper - Password/hash cracking </a>
      </li>
      <li class="list-group-item">
        <a style="color: #42b983;" href="https://www.aircrack-ng.org/"> Aircrack-ng - Wifi Cracking </a>
      </li>
    </ul>
    <h3> Privacy/Personal Security </h3>
    <ul class="list-group-mine list-group">
      <li class="list-group-item">
        <a style="color: #42b983;" href="https://www.torproject.org/"> Tor - Proxy network for anonymous web browsing </a> 
      </li>
      <li class="list-group-item">
        <a style="color: #42b983;" href="https://gnupg.org/"> GnuPG - Encryption/decryption tool </a>
      </li>
      <li class="list-group-item">
        <a style="color: #42b983;" href="https://addons.mozilla.org/en-US/firefox/addon/noscript/"> 
          NoScript - Browser extention to block tracking/malicious javascript (Firefox)
        </a>
      </li>
      <li class="list-group-item">
        <a style="color: #42b983;" href="https://www.eff.org/https-everywhere"> 
          HTTPSEverywhere - Browser extention to force encrypted HTTPS(Chrome/Firefox)
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tools'
}
</script>

<style>
.list-group-mine .list-group-item {
  background-color: #27282A;
}

.list-group-mine .list-group-item:hover {
  background-color: #3C3D3E;
}
</style>
