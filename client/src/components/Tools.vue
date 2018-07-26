<template>
  <div class="container">
    <h3> Networking </h3>
    <ul class="list-group-mine list-group">
      <li class="list-group-item">Wireshark - Graphical Packet Sniffer </li>
      <li class="list-group-item">Nessus - Graphical Port Scanner </li>
      <li class="list-group-item">NMap - Open Source Command Line Port Scanner </li>
    </ul>
    <h3> Steganography </h3>
    <ul class="list-group-mine list-group">
      <li class="list-group-item">HxD - Hex Editor (Windows) </li>
      <li class="list-group-item">HexFiend - Hex Editor (macOS) </li>
      <li class="list-group-item">GHex - Hex Editor (Linux) </li>
      <li class="list-group-item">ExifTool - Reads/edits metadata for various filetypes </li>
      <li class="list-group-item">Scalpel - File Carving Tool </li>
      <li class="list-group-item">BinWalk - Carves Files From Firmware </li>
      <li class="list-group-item">Sleuthkit - Pulls files from disk images </li>
    </ul>
    <h3> Web Hacking </h3>
    <ul class="list-group-mine list-group">
      <li class="list-group-item">BurpSuite - HTTP request mucking tool </li>
      <li class="list-group-item">EditThisCookie - Cookie editor (Chrome) </li>
      <li class="list-group-item">Cookies Manager+ - Cookie editor (Firefox) </li>
    </ul>
    <h3> Crypto/Cracking </h3>
    <ul class="list-group-mine list-group">
      <li class="list-group-item">John The Ripper - Password/hash cracking </li>
      <li class="list-group-item">Aircrack-ng - Wifi Cracking </li>
    </ul>
    <h3> Privacy/Personal Security </h3>
    <ul class="list-group-mine list-group">
      <li class="list-group-item">Tor - Proxy network for anonymous web browsing </li>
      <li class="list-group-item">GnuPG - Encryption/decryption tool </li>
      <li class="list-group-item">NoScript - Browser extention to block tracking/malicious javascript (Firefox)</li>
      <li class="list-group-item">HTTPSEverywhere - Browser extention to force encrypted HTTPS(Chrome/Firefox)</li>
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
