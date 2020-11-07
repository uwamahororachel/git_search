import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserserviceService } from '../userservice.service';
import { resolve } from 'url';
import { reject } from 'q';
import { Userview } from '../userview';
import { Repolist } from '../repolist';
import { from } from 'rxjs';