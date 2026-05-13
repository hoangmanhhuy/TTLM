import 'package:flutter/material.dart';

class LiturgicalReading {
  final String label;
  final String text;
  final IconData icon;
  final Color color;
  final Color iconColor;

  LiturgicalReading({
    required this.label,
    required this.text,
    required this.icon,
    required this.color,
    required this.iconColor,
  });
}

class LiturgicalData {
  final String dateString;
  final String season;
  final String feast;
  final List<LiturgicalReading> readings;

  LiturgicalData({
    required this.dateString,
    required this.season,
    required this.feast,
    required this.readings,
  });
}

enum UserRole { public, priest }

class UserProfile {
  final String id;
  final String holyName;
  final String fullName;
  final String diocese;
  final String? parish;
  final String? role;
  final String? birthDate;
  final String? ordinationDate;
  final String? degree;
  final String? email;

  UserProfile({
    required this.id,
    required this.holyName,
    required this.fullName,
    required this.diocese,
    this.parish,
    this.role,
    this.birthDate,
    this.ordinationDate,
    this.degree,
    this.email,
  });
}
